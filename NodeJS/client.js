const net = require('net');
const readline = require('readline');

const address = {
  host: '127.0.0.1',
  port: 10086
};

const socket_option = {
  allowHalfOpen: false,
  readable: true,
  writable: true
};

let client_socket = new net.Socket(socket_option);

let client = net.createConnection(address);

client.on('connect', () => {
  console.log(`connect to ${address.host}:${address.port}`);
});

client.on('error', () => {
  console.error('createConnection error! client exit~');
});


process.stdin.setEncoding('utf-8');
process.stdin.pipe(client);