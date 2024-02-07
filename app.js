const express = require('express'); // requerimos la librería express

const app = express(); // ejecutamos express (el export de express es una función)

const port = 3000; //puerto en el que queremos escuchar
app.listen(port, () => console.info(`Application running a port ${port}`)); // método listen (puerto, y función callback, se ejecuta la función cuando esté conectada al puerto 3000)