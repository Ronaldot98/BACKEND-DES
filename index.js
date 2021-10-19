const express = require('express');

const app = express();
//asigne en el puerto si viene en una variable de entorno
const port= process.env.PORT || 3000;

app.get('/', (req, res) =>
{
  // respuesta que se envia al cliente
  //res.send --enviar un string
  res.send("hola mundo");
});


//escuchar el puerto
app.listen(port, ()=>{
  console.log("Puerto " + port)
});
