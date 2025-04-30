package gn.lpl.misterfly.discord;

import gn.lpl.misterfly.discord.datas.Salon;
import gn.lpl.misterfly.discord.dto.MessageDto;
import gn.lpl.misterfly.discord.steps.GuildManager;
import lombok.Getter;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.events.guild.GuildReadyEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.utils.ChunkingFilter;
import net.dv8tion.jda.api.utils.MemberCachePolicy;
import net.dv8tion.jda.api.utils.cache.CacheFlag;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static gn.lpl.misterfly.tools.ExceptionTool.ignoreException;

@RestController
@RequestMapping("bot/misterfly")
@Transactional
public class MisterFly extends ListenerAdapter implements GuildManager {
    private final JDA jda;
    private final SimpMessagingTemplate messagingTemplate;
    @Getter
    private final ApplicationEventPublisher publisher;

    public MisterFly(@Value("${discord.token}") String token, SimpMessagingTemplate messagingTemplate, ApplicationEventPublisher publisher) {
        this.messagingTemplate = messagingTemplate;
        this.publisher = publisher;
        jda = JDABuilder.createDefault(token)
                .setMemberCachePolicy(MemberCachePolicy.ALL)
                .enableIntents(GatewayIntent.GUILD_MEMBERS,
                        GatewayIntent.GUILD_MESSAGE_REACTIONS,
                        GatewayIntent.GUILD_MESSAGES,
                        GatewayIntent.MESSAGE_CONTENT,
                        GatewayIntent.GUILD_VOICE_STATES
                )
                .enableCache(CacheFlag.VOICE_STATE)
                .setChunkingFilter(ChunkingFilter.ALL)
                .setBulkDeleteSplittingEnabled(false)
                //.setActivity(Activity.watching("La vallée de la mort."))
                .addEventListeners(this)
                .build();
    }

    @Override
    public void onGuildReady(GuildReadyEvent event) {
        checkChannels(event.getGuild());
    }

    @GetMapping("gallery")
    public Optional<List<MessageDto>> getGallery() {
        return //Optional.ofNullable(jda.getGuildById(id))
                jda.getGuilds().stream()/*.skip(1)*/.findFirst()
                        .flatMap(guild -> guild.getTextChannelsByName(Salon.GALLERY.getName(), false)
                                .stream().findFirst())
                        .map(textChannel -> ignoreException(() -> textChannel.getIterableHistory().takeAsync(20).get().stream()
                                .collect(Collectors.groupingBy(m -> m.getTimeCreated().toLocalDate()))
                                .entrySet().parallelStream().
                                map(e -> new MessageDto()
                                        .setCreated(e.getKey())
                                        .setImages(e.getValue().stream().flatMap(message -> message.getAttachments().stream().filter(Message.Attachment::isImage)
                                                .map(Message.Attachment::getProxyUrl)).toList())
                                ).sorted().toList()));
    }
}
