const express = require('express');

const app = express();


console.log("server is gestart op 8080...");

var user = 3000;

app.listen(user);

app.use(express.static('public'));
