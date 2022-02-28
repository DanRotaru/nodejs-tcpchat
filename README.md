# Node.js TCP Chat
## Objectives

1. Understand how to create a socket ✅
2. Understand how the TCP server starts listening to connections on a port ✅
3. Understand how data is received via socket ✅
4. Understand how data is transmitted through socket ✅
5. Understand how to process multiple customers at once ✅
6. Understand how to close the connection correctly both from the client and from the server ✅

## Description
You need to create two console applications.
One of them will serve as a network server, and the other will serve as a client that will connect to the first one.
The client application will prompt the user to enter text from the keyboard and send it to the server.
The server application will display this message in its window,
and then forward it to all connected customers (including the one who sent the original message).
Customers will be able to send as many messages as they want.


## Program run steps

### Installing dependencies
```javascript
npm i
```

### Start server
```javascript
node server
```

### Connect a new client
```javascript
node
```
