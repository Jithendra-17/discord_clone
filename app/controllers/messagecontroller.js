const db=require('../models');
const Message=db.messages;
const io=require('../server');
const {authenticateToken}=require('./authnitication');
// let socket=io();
// const io=require('socket.io')(5000);


const sendmsg=async(req,res)=>{
//   id=req.userId;
// io.on('connection',(id)=>{
//     console.log(id)
//   id.on('New message',(data)=>{
//     console.log(data);
//   })
//   id.on('disconnect',()=>{
//     console.log('User disconnected');
//   })
//   id.emit('msg',{name:'jith'})
// //   io.emit('emit msg',{ name1:'dj'})
// })
// const sockets = await io.fetchSockets();
res.send('hello')
// for (const socket of sockets) {
//     console.log("this is the for loop answer",socket.id);
//     socket.emit('m',{msg:'hellllllo'})
//   }
// console.log(sockets);
//////////////////////////////////////
// io.sockets.on('connection',socket=>{

// })



}




///////////////////////////////

// io.use(function(socket, next) {
//   // execute some code
//   next();
// })
// .on('connection', function(socket) {
//     // Connection now authenticated to receive further events

//     socket.on('message', function(message) {
//         io.emit('message', message);
//     });
// });

//////////////////////////////



// io.on('connection',socket=>{
//     console.log('conted')
// })



module.exports={
    sendmsg,
}