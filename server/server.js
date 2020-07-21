const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http")
const socketIo = require("socket.io")

const PORT = process.env.PORT || 5000;

const app = express();

//Socketio setup------------------
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (client) => {
    console.log("New client connected")

    client.on("disconnect", () => {
        console.log("Client disconnected")
    })

    client.emit("FromAPI", "Hello")

    client.on("savedBook", (data) => {
        console.log(data)
        client.broadcast.emit("alertSavedBook", data)
    })

    client.on("deleteBook", (data) => {
        client.broadcast.emit("alertDeletedBook", data)
    })
})

//Socketio setup------------------

//Mongoose
//---------------------------------
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/books', {
    useNewUrlParser: true, useUnifiedTopology: true
});
//---------------------------------

//Middleware
app.use(cors())
app.use(express.json())

//Using routes
app.use(require("./routes/api-routes"))
app.use(require("./routes/routes"))

server.listen(PORT, err => {
    if (err) throw err
    console.log(`server started on port: ${PORT}`)
})