const express = require('express');

const app = express();

app.get('/', (req, res)=> {

  return res.json('Nossa api esta rodando');
});

app.listen(3001, () => {
  console.log('servidor esta rodando porta 3001');
});