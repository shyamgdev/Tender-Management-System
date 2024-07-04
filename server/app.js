require('dotenv').config();
const express = require('express');
const app = express();
const web = require('./routes/web');
const { connectDb } = require('./db/connectDb');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const http = require('http'); // Import http module
const { Server } = require('socket.io'); // Import socket.io

// Create HTTP server and integrate with Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
}); // Initialize socket.io with the server

// {
//   origin: "http://192.168.216.115:5173"
// }
app.use(cors()); // FOR API COMMUNICATION IN REACT

app.use(cookieParser());

app.use(fileUpload({ useTempFiles: true }));

app.use(express.json()); // GET DATA IN API

connectDb();

app.use('/api', web);

// Set up Socket.io connection
io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle incoming messages
  socket.on('message', (data) => {
    console.log('Message received:', data);
    // You can broadcast messages to all connected clients
    io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// CREATE SERVER
server.listen(process.env.PORT, () => {
  console.log(`Server Running on http://localhost:${process.env.PORT}/api/getalluser`);
});

module.exports = { io };