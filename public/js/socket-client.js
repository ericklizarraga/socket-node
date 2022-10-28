
///http://localhost:8000/socket.io/socket.io.js
//referencias html
const lblOnline     = document.querySelector('#lblOnline');
const lblOffline    = document.querySelector('#lblOffline');
const txtMensaje    = document.querySelector('#txtMensaje'); 
const btnEnviar     = document.querySelector('#btnEnviar'); 
 
console.log('hola mundo');
const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    // console.log('Desconectado');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', ( payload )=> {
    console.log( payload );
} );

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;

    const payload = {
        id:1234,
        data:mensaje,
        fecha: new Date().getDate()
    }

    socket.emit('enviar-mensaje',  payload ,  ( id ) => {
        console.log(id);
    });
    
});






