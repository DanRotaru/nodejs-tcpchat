const net = require('net');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = {
    host: '127.0.0.1',
    port: 4000
}

var user;


const client = net.createConnection(options)

client.on('connect', () => {
    console.log('Connected to', options.host, 'on port', options.port)

    readline.question("Your name: ", name => {
        user = name;
        sendLine()
    });
})

client.on('data', (data) => {
    data = data.toString();
    try {
        data = JSON.parse(data);
        console.log(data.user + ": " + data.msg);
    } catch (e) {
        console.log(data);
    }
    sendLine()
})



client.on('error', (err) => {
    if(err.message == "read ECONNRESET") {
        console.log("Connection was closed!");
        client.end();
        process.exit(0);
    }
    else console.log(err.message)
})

function sendLine() {
    readline.question("", msg => {
        if(msg == "/bye"){
            client.write(JSON.stringify({user: user, msg: "Bye-bye"}));
            client.end();
            process.exit(0);
        }
        else client.write(JSON.stringify({user: user, msg: msg}));
    });
}