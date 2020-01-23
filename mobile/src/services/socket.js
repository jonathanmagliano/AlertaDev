import socketio from 'socket.io-client';

const socket = socketio('<INSIRA O SEU IP AQUI (NÃO SE ESQUEÇA DE INICIAR COM http://)>:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
};