//conectar nuestro ORM con el modelo creado
//enviar la conexion a otros modelos
//va a estra toda la conexion de sequelize con nuestro modelo


const { Rol, EsquemaTb_rol } = require('./roles.model');
const { Usuario, EsquemaTb_usuario } = require('./usuarios.model');
const { Empleado, EsquemaTb_empleados } = require('./empleados.model');
const { Cliente, EsquemaTb_clientes } = require('./cliente.model');
const { Direccion, EsquemaTb_direccion } = require('./direccion.model');
const { Sucursal, EsquemaTb_sucursal } = require('./sucursales.model');
const { Proveedor, EsquemaTb_proveedores } = require('./proveedores.model');
const { Producto, EsquemaTb_producto } = require('./producto.model');
const { Compras, EsquemaTb_compras } = require('./compras.model');
const { OrdenCompra, EsquemaTb_ordencompra } = require('./OrdenCompra.model');
const { OrdenEnvio, EsquemaTb_ordenenvio } = require('./OrdenEnvio.model');
const { OrdenProducto, EsquemaTb_ordenProducto } = require('./OrdenProducto.model');


//recibe la conexion
function setupModels(sequelize) {
  //ir al modelo y ese modelo tiene que tener un esquema
  Direccion.init(EsquemaTb_direccion, Direccion.config(sequelize));
  Sucursal.init(EsquemaTb_sucursal, Sucursal.config(sequelize));
  Cliente.init(EsquemaTb_clientes, Cliente.config(sequelize));
  Producto.init(EsquemaTb_producto, Producto.config(sequelize));
  Rol.init(EsquemaTb_rol, Rol.config(sequelize));
  Empleado.init(EsquemaTb_empleados, Empleado.config(sequelize));
  Usuario.init(EsquemaTb_usuario, Usuario.config(sequelize));
  Proveedor.init(EsquemaTb_proveedores, Proveedor.config(sequelize));
  Compras.init(EsquemaTb_compras, Compras.config(sequelize));
  OrdenCompra.init(EsquemaTb_ordencompra, OrdenCompra.config(sequelize));
  OrdenEnvio.init(EsquemaTb_ordenenvio, OrdenEnvio.config(sequelize));
  OrdenProducto.init(EsquemaTb_ordenProducto, OrdenProducto.config(sequelize));



  //si los modelos tiene una asociación ejecutar el metodo

  Rol.associate(sequelize.models);
  Direccion.associate(sequelize.models);
  Sucursal.associate(sequelize.models);
  Empleado.associate(sequelize.models);
  Usuario.associate(sequelize.models);
  Proveedor.associate(sequelize.models);
  Producto.associate(sequelize.models);
  Compras.associate(sequelize.models);
  OrdenEnvio.associate(sequelize.models);
  OrdenCompra.associate(sequelize.models);
}

module.exports = setupModels;
