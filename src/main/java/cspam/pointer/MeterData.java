package cspam.pointer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Slf4j
public class MeterData {
    @Getter @Setter public float chance;
    @Getter @Setter public float margin;
    @Getter @Setter public float votes;

    @Override
    public String toString() {
        String result = "{ \"chance\":" + chance + ", \"margin\":" + margin + ", \"votes\":" + votes + " }";
        log.info("String result is " + result);
        return result;
    }
}
