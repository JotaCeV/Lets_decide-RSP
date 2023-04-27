import express from "express";
import http from "http";
import { Socket, Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("user connected", socket.id);
});

httpServer.listen(3001, () => {
  console.log("Server on port", 3001);
});
