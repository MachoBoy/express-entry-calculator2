const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('client/build'));

app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000);
