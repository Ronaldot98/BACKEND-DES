//conectar nuestro ORM con el modelo creado
//enviar la conexion a otros modelos
//va a estra toda la conexion de sequelize con nuestro modelo

const { Permiso, EsquemaTb_permiso } = require('./permisos.model');
const { Rol, EsquemaTb_rol } = require('./roles.model');
const { Usuario, EsquemaTb_usuario } = require('./usuarios.model');
const { Empleado, EsquemaTb_empleados } = require('./empleados.model');
const { Categoria, EsquemaTb_categorias } = require('./categorias.model');
const { Cliente, EsquemaTb_clientes } = require('./cliente.model');
const { Direccion, EsquemaTb_direccion } = require('./direccion.model');
const { Sucursal, EsquemaTb_sucursal } = require('./sucursales.model');
const { Proveedor, EsquemaTb_proveedores } = require('./proveedores.model');
const { Producto, EsquemaTb_producto } = require('./producto.model');
const { Compras, EsquemaTb_compras } = require('./compras.model');
const { OrdenCompra, EsquemaTb_ordencompra } = require('./OrdenCompra.model');



//recibe la conexion
function setupModels(sequelize) {
  //ir al modelo y ese modelo tiene que tener un esquema
  Permiso.init(EsquemaTb_permiso, Permiso.config(sequelize));
  Direccion.init(EsquemaTb_direccion, Direccion.config(sequelize));
  Sucursal.init(EsquemaTb_sucursal, Sucursal.config(sequelize));
  Categoria.init(EsquemaTb_categorias, Categoria.config(sequelize));
  Cliente.init(EsquemaTb_clientes, Cliente.config(sequelize));
  Rol.init(EsquemaTb_rol, Rol.config(sequelize));
  Empleado.init(EsquemaTb_empleados, Empleado.config(sequelize));
  Usuario.init(EsquemaTb_usuario, Usuario.config(sequelize));
  Proveedor.init(EsquemaTb_proveedores, Proveedor.config(sequelize));
  Producto.init(EsquemaTb_producto, Producto.config(sequelize));
  Compras.init(EsquemaTb_compras, Compras.config(sequelize));
  OrdenCompra.init(EsquemaTb_ordencompra, OrdenCompra.config(sequelize));



  //si los modelos tiene una asociación ejecutar el metodo

  Permiso.associate(sequelize.models);
  Rol.associate(sequelize.models);
  Direccion.associate(sequelize.models);
  Sucursal.associate(sequelize.models);
  Empleado.associate(sequelize.models);
  Usuario.associate(sequelize.models);
  Proveedor.associate(sequelize.models);
  Producto.associate(sequelize.models);
  Compras.associate(sequelize.models);
  Cliente.associate(sequelize.models);

}

module.exports = setupModels;
