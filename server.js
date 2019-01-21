const hapi = require("hapi");

//create new server
const server = new hapi.Server();

//connect the server to localhost and port should be 3000
server.connection({
    host: 'localhost',
    port: '3000'
});

//start the server
server.start(err => {
    if (err) {
        throw err;
    }
   console.log(`Server Running at PORT ${server.info.port}`);

});