package cspam.pointer;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PointerController {

    private final PointerWebSocketHandler webSocketHandler;
    private MeterData meterData = new MeterData(50, 0, 270, true);

    @GetMapping("/status")
    public synchronized String status() {
        return meterData.toString();
    }

    @PostMapping("/update")
    public synchronized void update(
        @RequestParam float chance,
        @RequestParam float margin,
        @RequestParam float votes,
        @RequestParam(required = false, defaultValue = "true") boolean isForecast) throws Exception {

        if (chance < 0 || chance > 100) {
            throw new RuntimeException("Chance out of range, should be in range 0 (Biden will win) to 100 (Trump will win). 50 is a tossup");
        }

        if (margin < -12 || margin > 12) {
            throw new RuntimeException("Margin out of range, should be in range -12 (12 points to Dems) to +12 (12 point swing to repubs)");
        }

        if ((votes < 0 && votes > -270) || (votes >=0 && votes < 270)) {
            throw new RuntimeException("Votes should be in the range -540 to -270 (for Biden), 270 to 540 (for Trump)");
        }

        meterData = new MeterData(chance, margin, votes, isForecast);
        webSocketHandler.sendUpdate(meterData);
    }
}
