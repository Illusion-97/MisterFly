package gn.lpl.misterfly.discord.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDate;
import java.util.List;

@Data
@Accessors(chain = true)
@NoArgsConstructor
public class MessageDto implements Comparable<MessageDto> {
    private LocalDate created;
    private List<String> images;

    @Override
    public int compareTo(@NotNull MessageDto o) {
        return o.created.compareTo(created);
    }
}
