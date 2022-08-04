const path = require('path');

const express = require('express');
const app = express();


// Registrar como publica/static la carpeta public
app.use(express.static('public'));

// Registrar carpetas estaticas con "prefijos"
app.use('/desktop', express.static('desktop'));
app.use('/mobile', express.static('mobile'));

// Registrar ejs como motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use(require('./routes/products '))

app.listen(3000, () => console.log('Proyecto en el puerto 3000'));

