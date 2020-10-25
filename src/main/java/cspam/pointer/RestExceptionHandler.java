package cspam.pointer;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler
    extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = { InvalidParametersException.class })
    protected ResponseEntity<Object> handleConflict(
        RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "I didn't like those parameters";
        return handleExceptionInternal(ex, bodyOfResponse,
            new HttpHeaders(), HttpStatus.NOT_ACCEPTABLE, request);
    }

    @ExceptionHandler(value = { VeryFunnyException.class })
    protected ResponseEntity<Object> handleJokers (
        RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "DISABLED due to HACKER abuse :-(";
        return handleExceptionInternal(ex, bodyOfResponse,
            new HttpHeaders(), HttpStatus.UNAUTHORIZED, request);
    }
}
