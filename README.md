# Node.js TCP Chat
## Obiective

1. A înțelege cum se crează un socket ✅
2. A înțelege cum TCP server începe a asculta conexiuni pe un port ✅
3. A înțelege cum se primesc datele prin socket ✅
4. A înțelege cum se transmit datele prin socket ✅
5. A înțelege cum se pot prelucra mai mulți clienți concomitent ✅
6. A întelege cum se poate închide conexiunea corect precum din partea client atât și din partea server ✅

## Descriere
Este nevoie de a crea doua aplicații de consolă.
Una din ele va servi ca un server de rețea, iar altă va servi ca un client care se va conecta la prima.
Aplicație client va cere de la utilizator să introducă un text de la tastiera și îl va trimite către server.
Aplicația server va afișa acest mesaj în fereastra sa,
iar apoi îl va retransmite la toți clienți conectați (inclusiv și la cel care a trimis mesajul inițial).
Clienții vor putea să transmită cîte mesaje vor.


## Etapele rulării programului

### Instalarea dependețelor
```javascript
npm i
```

### Pornim serverul
```javascript
node server
```

### Conectăm un client
```javascript
node client
```