const express = require('express');
const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');
const uploadRouter = require('../Nova pasta/routes/uploadRoutes');

process.env.NODE_TLS_REJECT_UNAAUTHORIZED = '0';

const app = express();

app.set('view engine', 'ejs');

app.use('/usuario', uploadRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log(
    'executando o servidor no endereco http://localhost:3000/usuario'
  );
});
