// creando servidor
const express = require('express');
const cors= require('cors');
const routerApi = require('./routes');


const {logErrors,errorHandler,boomErrorHandler,ormErrorHandler}=require('./middlewares/error.handler')

const app = express();
//asigne en el puerto si viene en una variable de entorno
const port= process.env.PORT || 3000;

//midalware se utiliza a empezar a utilizar a recibir informacion de tipo json
app.use(express.json());


//agregar origines en la que se puedan conectar en la Api
const whitelist=['http://localhost:4200','htpps://myapp.com'];

const options ={

  origin:(origin,callback)=>{
    //validar si ese origen esta incluido y usar el mismo origen
    if(whitelist.includes(origin) || !origin){
      //el acceso esta permitido
      callback(null,true);
    }
    else {
      callback(null,Error('no permitido'));
    }
  }
}

//habilitar a cualquier dominio
app.use(cors(options));






app.get('/', (req, res) =>
{
  // respuesta que se envia al cliente
  //res.send --enviar un string
  res.send("hola mundo");
});


routerApi(app);

//los middlewares de tipo error se deben hacer despues de definir el routing con este mismo fomrmato se ejecuta
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


//escuchar el puerto
app.listen(port, ()=>{
  console.log("Puerto " + port)
});
