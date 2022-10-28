require('dotenv').config();

const Server = require('./models/server');

new Server().listen();

// 1) "this.io.emit()" devuelve respuesta a absolutamente todos los sockets.

// 2) "socket.emit()" devuelve respuesta solo al socket que mandó mensaje.

// 3) "socket.broadcast.emit()" devuelve respuesta al resto de sockets menos al que mandó mensaje (como el segundo pero a la inversa)