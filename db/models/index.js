//conectar nuestro ORM con el modelo creado
//enviar la conexion a otros modelos
//va a estra toda la conexion de sequelize con nuestro modelo

const{Permiso,EsquemaTb_permiso}= require('./permisos.model');
const{Rol,EsquemaTb_rol}= require('./roles.model');
const{Usuario,EsquemaTb_usuario}= require('./usuarios.model');
const{Empleado,EsquemaTb_empleados}= require('./empleados.model');
const{Categoria,EsquemaTb_categorias}= require('./categorias.model');
const{Cliente,EsquemaTb_clientes}= require('./cliente.model');
const{Direccion,EsquemaTb_direccion}= require('./direccion.model');


//recibe la conexion
function setupModels(sequelize){
  //ir al modelo y ese modelo tiene que tener un esquema
  Permiso.init(EsquemaTb_permiso,Permiso.config(sequelize));
  Rol.init(EsquemaTb_rol,Rol.config(sequelize));
  Usuario.init(EsquemaTb_usuario,Usuario.config(sequelize));
  Empleado.init(EsquemaTb_empleados,Empleado.config(sequelize));
  Categoria.init(EsquemaTb_categorias,Categoria.config(sequelize));
  Cliente.init(EsquemaTb_clientes,Cliente.config(sequelize));
  Direccion.init(EsquemaTb_direccion,Direccion.config(sequelize));



   //si los modelos tiene una asociación ejecutar el metodo

   Permiso.associate(sequelize.models);
   Rol.associate(sequelize.models);
   Usuario.associate(sequelize.models);
   Empleado.associate(sequelize.models);



}

module.exports = setupModels;
