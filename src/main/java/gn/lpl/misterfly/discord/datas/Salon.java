package gn.lpl.misterfly.discord.datas;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import net.dv8tion.jda.api.entities.channel.ChannelType;

@RequiredArgsConstructor
@Getter
public enum Salon {
    GALLERY("\uD83C\uDFA8gallery-du-pacte", ChannelType.TEXT, "»»---- ๑ Vie du Pacte ๑ ----««"),
    CONTACT("mail-channel", ChannelType.TEXT, "Bot-Sandbox");
    private final String name;
    private final ChannelType type;
    private final String category;
}
