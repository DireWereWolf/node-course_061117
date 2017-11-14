const stream = require('stream');
const net = require('net');

const config = {
  host: 'localhost',
  port: 1337
};

const socket = new net.Socket();
const reader = new stream.read();

reader._read = function (chunk, encoding, callback) {
  console.log(chunk);
};

socket.connect(config.port, config.host, () => {
  console.log(`Connected on host ${config.host} and port ${config.port}`);
  process.stdin.pipe(reader);
});

// const reader = process.stdin;
//
// reader._read = function (chunk, encoding, callback) {
//
// };
//