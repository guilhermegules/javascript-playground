import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 3000;

app.get("/events", (req, res) => {
  // Required headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.flushHeaders();

  let counter = 0;

  const interval = setInterval(() => {
    counter++;

    res.write(`id: ${counter}\n`);
    res.write(`event: message\n`);
    res.write(
      `data: ${JSON.stringify({ count: counter, time: new Date() })}\n\n`
    );
    res.write(`event: user-update\n`);
    res.write(`data: {"user":"User","status":"online"}\n\n`);
  }, 1000);

  // Cleanup when client disconnects
  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`SSE server running on http://localhost:${PORT}`);
});
