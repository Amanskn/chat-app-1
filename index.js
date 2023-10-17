const http = require("http");
const express = require("express");
const path = require("path");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);
// io.on("abc", (msg) => {
//   console.log("Hello abc occured");
// });
io.on("connection", (socket) => {
  console.log("user is connected");
  socket.on("event1", (msg) => {
    console.log("Event1 occured with the message:-", msg);
    io.emit("message", msg);
  });
});
app.use(express.static(path.resolve(__dirname + "/public")));

app.get("/", (req, res) => {
  return res.send("Hello");
});
app.get("/new", (req, res) => {
  return res.send("Hello new");
});

app.get("/chat", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "public", "index1.html"));
  // res.sendFile(path.resolve(__dirname, "public", "style.css"));
});

const PORT = 9000;
server.listen(PORT, (err) => {
  if (err) {
    console.log("Error in running the server");
    return;
  }
  console.log("Server is running on port:--", PORT);
});
