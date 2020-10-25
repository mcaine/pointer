package cspam.pointer;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PointerController {

    private final PointerWebSocketHandler webSocketHandler;

    @PostMapping("/update")
    public void update(@RequestParam float chance, @RequestParam float margin, @RequestParam float votes) throws Exception {
        webSocketHandler.sendUpdate(chance, margin, votes);
    }

}
