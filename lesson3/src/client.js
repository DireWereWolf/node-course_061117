const net = require('net');

const config = {
  host: 'localhost',
  port: 1337
};

const socket = new net.Socket();

socket.connect(config.port, config.host, function(){
  console.log(`Connected on host ${config.host} and port ${config.port}`);
  process.stdin.pipe(this).pipe(process.stdout);
});

socket.on('close', function () {
  process.stdin.unpipe(this);
  this.unpipe(process.stdout);
});