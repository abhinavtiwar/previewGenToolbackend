const express=require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port=5000;
const app=express();
const httpServer = createServer(app);
const io = new Server(httpServer, {cors : {origin: ["http://localhost:3000"]} });

// recieving the event
io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit('recmsg', data);

  });
});

const userRouter=require("./routers/userRouter");//importing 
const productRouter=require("./routers/productRouter");//importing
const cors=require("cors");

// middleware to convert client json data to javascript
app.use(express.json());
//cors is used to allow request from outside server
app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware
app.use("/user",userRouter);
app.use("/prod",productRouter); 

app.use(express.static('./static'))
//route or endpoint
app.get('/',(request,response) =>{
    response.send("response from express");
})
app.get('/home',(request,response) =>{
    response.send("response from express");
})




//starting the server
httpServer.listen(port,() =>{ 
console.log("server started"); 
});