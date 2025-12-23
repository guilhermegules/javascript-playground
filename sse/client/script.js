const eventSource = new EventSource("http://localhost:3000/events");

eventSource.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);

  const li = document.createElement("li");
  li.textContent = `Count: ${data.count} | Time: ${data.time}`;
  document.getElementById("messages").appendChild(li);
});

eventSource.addEventListener("error", (err) => {
  console.error("SSE error:", err);
  eventSource.close();
});

eventSource.addEventListener("user-update", (event) => {
  console.log("User update:", JSON.parse(event.data));
});
