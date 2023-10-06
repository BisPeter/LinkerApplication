"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = require("net");
const PIPE_NAME = "\\\\.\\pipe\\my-named-pipe";
const server = (0, net_1.createServer)((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(`Received data: ${data.toString()}`);
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});
server.on('error', (err) => {
    console.error(`Server error: ${err}`);
});
server.listen(PIPE_NAME, () => {
    console.log(`Server listening on pipe: ${PIPE_NAME}`);
});
