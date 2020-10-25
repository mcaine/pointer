package cspam.pointer;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Slf4j
@Component
public class PointerWebSocketHandler extends TextWebSocketHandler {

    private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        log.debug("afterConnectionEstablished");
        sessions.add(session);
        log.info("There are " + sessions.size() + " sessions");
        super.afterConnectionEstablished(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        log.debug("afterConnectionClosed");
        sessions.remove(session);
        log.info("There are " + sessions.size() + " sessions");
        super.afterConnectionClosed(session, status);
    }

    public void sendUpdate(float chance, float margin, float votes) throws Exception {
        log.debug("Sending new values chance=" + chance + ", margin=" + margin + ", votes=" + votes);
        log.info("There are " + sessions.size() + " sessions");
        sessions.forEach(webSocketSession -> {
            try {
                log.info("Sending message to a websocket");
                String text = new MeterData(chance, margin, votes).toString();
                webSocketSession.sendMessage(new TextMessage(text));
            } catch (IOException ioex) {
                log.error(ioex.getMessage());
            }
        });
    }
}
