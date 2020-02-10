const express = require('express');
const app = express();
const PORT = 5000;

function handleListening () {
    console.log(`Listening on : http://localhost:${PORT}`);
    console.log('1');
    console.log('2');
    console.log('3');
}

app.listen(PORT, handleListening);