const express = require('express');
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const io = require("socket.io");
const favicon = require("serve-favicon");
const compression = require("compression");
const helmet = require("helmet");

const app = express(),
    option = {
        key: fs.readFileSync(__dirname + "key.pem"),
        cert: fs.readFileSync(__dirname +"cert.pem")
    },
    port = process.env.PORT || 8000;
    server = process.env.NODE_ENV === "production" ? 
        http.createServer(app).listen(port) :
        https.createServer(options, app).listen(port),
    io = io(server);
    app.use(compression());
    app.use(express.static(path.join(__dirname, "static")));
    app.use((req, res) => res.sendFile(__dirname, "static/index.html"));
    app.use(favicon("./static/favicon.ico"));
    // app.disable("x-powered-by");
    app.use(helmet);

    /* socket 관련 */
    io.sockets.on("connection", socket => {
        let room = "";
        socket.on("message", message => socket.broadcast.to(room).emit("message", message));
        socket.on("find", () => {
            const url = socket.request.header.referer.split('/');
            room = url[url.length - 1];
            const sr = io.socket.adapter.rooms[room];
            if(st === undefined) {
                socket.emit("create");
                socket.join(room)
            }; 
            socket.emit("join");
        });
        socket.on("auth", data => {
            data.sid = socket.id;
            socket.broadcast.to(room).emit("approve", data);
        });
        socket.on("join", id => {
            io.sockets.connected[id].join(room);
            io.bind(room).emit("bridge");
        });
        // socket.on("reject", () => socket.emit("full"));
        socket.on("leave", () => {
            socket.broadcast.to(room).emit("hangup");
            socket.leave(room);
        })
    });

