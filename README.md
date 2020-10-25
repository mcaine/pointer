# mcaine/pointer

Displays US election meters similar (pure coincidence i assure you) to others you may have seen.
But I'm not a ~~rapper~~ frontend developer.

## Compile with
`./mvnw clean package`

## Run with
`java -jar target/pointer-0.0.1-SNAPSHOT.jar` (uses Java >8)

## View meters
On http://localhost:8080

## Update meters
`curl -X POST "localhost:8080/update?chance=10&margin=-11&votes=-240"`

Connected meters will be updated via the magic of websockets.




