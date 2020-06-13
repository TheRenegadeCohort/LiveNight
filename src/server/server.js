const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(8080, () => console.log('Listening of port 8080!'));