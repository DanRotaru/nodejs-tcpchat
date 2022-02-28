const net = require('net');

const server = net.createServer()
const port = 4000

var clients = [];

server.on('connection', (socket) => {
    console.log('New client connected!');
    // for(let client of clients) client.write("New client connected!");
    clients.push(socket);
    socket.on('data', (data) => {
        data = data.toString();
        console.log("Message from client:", data);
        for(let client of clients) client.write(data);
    })
    socket.on('close', () => {
        console.log('Client was disconnected');
    })

    socket.on('error', (err) => {
        console.log(err.message)
    })
})

server.listen(port, () => console.log('*** Server is running on port', server.address().port, '***'));