const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'is this working' });
});

app.listen(process.env.PORT || 5000);
