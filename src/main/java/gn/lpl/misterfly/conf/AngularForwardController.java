package gn.lpl.misterfly.conf;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class AngularForwardController {

    @GetMapping("{path:^(?!api|bot|public|swagger)[^\\.]*}/**")
    public String handleForward(@PathVariable String path) {
        return "forward:/";
    }

}
