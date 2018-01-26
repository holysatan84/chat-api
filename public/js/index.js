var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});


socket.on('newMessage', function(message) {
  console.log('New message', message);
})


socket.emit('createMessage', {
  from: 'sudeep1',
  text: 'text Message'
})

// socket.emit('email', {
//   to: 'asd@asd.asd',
//   text: 'asdsadsa asds das d'
// })
