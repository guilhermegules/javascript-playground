# SSE

## What problem does SSE solve?

Normally, a browser asks the server for data:

```
Browser → Server → Response → Connection closes
```

If you want live updates (notifications, counters, logs, prices), you have two bad options:

- Refresh the page
- Poll the server every X seconds

Both are inefficient and slow.

SSE solves this by keeping the connection open, allowing the server to push data whenever it wants.

## What exactly is Server-Sent Events?

Server-Sent Events is a one-way, persistent HTTP connection

- Client opens the connection
- Server keeps it open
- Server pushes events continuously
- Client just listens

Important:

- Only server -> client
- Built on standard HTTP
- No WebSocket upgrade needed

## How the communication flow works

Step-by-step flow

1. Browser sends a normal HTTP GET request
2. Server replies with special headers
3. Server does NOT close the connection
4. Server sends messages over time
5. Browser receives messages automatically

```
Client  ──GET /events──────────────▶ Server
Client  ◀─event data─────────────── Server
Client  ◀─event data─────────────── Server
Client  ◀─event data─────────────── Server
```

## Why HTTP headers matter

To tell the browser “this is SSE”, the server must send:

```
Content-Type: text/event-stream
```

This header means:

- "This response will stream data"
- "Do not buffer"
- "Do not close automatically"

Other important headers:

```
Cache-Control: no-cache
Connection: keep-alive
```

They ensure:

- No caching
- Connection stays open

## What does an SSE message look like?

SSE messages are plain text, not JSON by default.

Each message is made of fields, one per line.

Example:

```
id: 1
event: message
data: Hello World
```

Every message must end with a blank line, without this the browser never process the event.

## Core SSE fields

- data
  - this field is the actual payload
  - Can be text or json
  - multiple data lines are concatenated
- event
  - Defines the event type
  - Without it, use the default value of "message"
  - With it the client can listen to named events
- id
  - Unique event identifier
  - Used for
    - Reconnection
    - Resume stream after disconnect
- retry
  - How long the browser waits before reconnecting

## Why the connection stays open

Unlike REST:

- The server never calls `res.end()`
- Data is written in chunks
- TCP connection stays alive

## What happens when the client disconnects?

Disconnect can happen when:

- User closes tab
- Network drops
- Page reloads

The server must:

- Detect it
- Clean up resources

Conceptually:

> Client is gone -> stop sending events

## Automatic reconnection

This is a huge advantage of SSE.

Browser behavior

- If connection drops
- Browser reconnects automatically
- Sends last received id

## How the browser listens to SSE

Browsers use, `new EventSource(url)`

Conceptually:

- Opens persistent HTTP connection
- Parses stream
- Emits events automatically

You don’t parse:

- Buffers
- Chunks
- Newlines

The browser does all of that for you.

## SSE vs WebSockets

| Concept        | SSE             | WebSockets        |
| -------------- | --------------- | ----------------- |
| Direction      | Server → Client | Two-way           |
| Transport      | HTTP            | TCP               |
| Complexity     | Low             | Higher            |
| Auto-reconnect | Yes             | No                |
| Firewalls      | Friendly        | Sometimes blocked |

Rule of thumb:

- SSE → notifications, feeds, streams
- WebSockets → chat, games, collaboration

## Real-world use cases

SSE is perfect for:

- Notification systems
- Live dashboards
- Order status updates
- Logs / metrics streaming
- Progress bars

Not good for:

- Chat apps
- Multiplayer games
- Bidirectional sync

## Mental model

Think of SSE as:

> “A never-ending HTTP response where the server keeps talking”

Not:

- REST
- Not WebSocket
- Not polling
