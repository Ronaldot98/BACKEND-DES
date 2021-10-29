'use strict';

const {EsquemaTb_clientes,CLIENTE_TABLE}= require('./../models/cliente.model');
const {EsquemaTb_compras,COMPRA_TABLE}= require('./../models/compras.model');
const {EsquemaTb_direccion,DIRECCION_TABLE}= require('./../models/direccion.model');
const {EsquemaTb_empleados,EMPLEADOS_TABLE}= require('./../models/empleados.model');
const {EsquemaTb_ordencompra,OrdenCompra_TABLE}= require('./../models/OrdenCompra.model');
const {EsquemaTb_ordenenvio,ORDEN_ENVIO_TABLE}= require('./../models/OrdenEnvio.model');
const {EsquemaTb_ordenProducto,ORDEN_PRODUCTO_TABLE}= require('./../models/OrdenProducto.model');
const {EsquemaTb_permiso,PERMISO_TABLE}= require('./../models/permisos.model');
const {EsquemaTb_producto,PRODUCTO_TABLE}= require('./../models/producto.model');
const {EsquemaTb_proveedores,PROVEEDOR_TABLE}= require('./../models/proveedores.model');
const {EsquemaTb_rol,ROL_TABLE}= require('./../models/roles.model');
const {EsquemaTb_sucursal,SUCURSAL_TABLE}= require('./../models/sucursales.model');
const {EsquemaTb_usuario,USUARIO_TABLE}= require('./../models/usuarios.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PERMISO_TABLE,EsquemaTb_permiso);
    await queryInterface.createTable(ROL_TABLE,EsquemaTb_rol);
    await queryInterface.createTable(CLIENTE_TABLE,EsquemaTb_clientes);
    await queryInterface.createTable(PRODUCTO_TABLE,EsquemaTb_producto);
    await queryInterface.createTable(DIRECCION_TABLE,EsquemaTb_direccion);
    await queryInterface.createTable(SUCURSAL_TABLE,EsquemaTb_sucursal);
    await queryInterface.createTable(EMPLEADOS_TABLE,EsquemaTb_empleados);
    await queryInterface.createTable(USUARIO_TABLE,EsquemaTb_usuario);
    await queryInterface.createTable(PROVEEDOR_TABLE,EsquemaTb_proveedores);
    await queryInterface.createTable(COMPRA_TABLE,EsquemaTb_compras);
    await queryInterface.createTable(OrdenCompra_TABLE,EsquemaTb_ordencompra);
    await queryInterface.createTable(ORDEN_ENVIO_TABLE,EsquemaTb_ordenenvio);
    await queryInterface.createTable(ORDEN_PRODUCTO_TABLE,EsquemaTb_ordenProducto);



  },

  down: async (queryInterface, Sequelize) => {

  }
};
