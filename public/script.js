const socket = io();
const sendBtn = document.querySelector("#sendBtn");
const messageInput = document.querySelector("#message");
const allMessages = document.getElementById("messages");
// io.emit("abc", "check1");
socket.on("message", (data) => {
  const newPara = document.createElement("p");
  newPara.innerText = data;
  allMessages.appendChild(newPara);
  // console.log("This is the response from backend", data);
});

sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  // console.log(message, "qwerty");
  socket.emit("event1", message);
});
