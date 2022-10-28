

const socketController = ( socket ) => {

    console.log("cliente conectado", socket.id);

    socket.on('disconnect', () => {
        
        console.log("cliente desconectado", socket.id);
    });
    
    socket.on('enviar-mensaje', ( payload, callback )=> {
        
        // console.log(payload);
        const id = 1234;
        callback( id );

        socket.broadcast.emit('enviar-mensaje', payload );
        // this.io.emit('enviar-mensaje', payload );//emite para todos --lo movi del server
    });
}

module.exports = {
    socketController,
}