console.log("test");
console.log(process.env.PORT);
process.env.server__port = process.env.PORT; // Get the port from named pipe

require('./ghost');
