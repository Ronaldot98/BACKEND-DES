'use strict';

const {EsquemaTb_categorias,CATEGORIA_TABLE}= require('./../models/categorias.model');
const {EsquemaTb_clientes,CLIENTE_TABLE}= require('./../models/cliente.model');
const {EsquemaTb_compras,COMPRA_TABLE}= require('./../models/compras.model');
const {EsquemaTb_direccion,DIRECCION_TABLE}= require('./../models/direccion.model');
const {EsquemaTb_empleados,EMPLEADOS_TABLE}= require('./../models/empleados.model');
const {EsquemaTb_ordencompra,OrdenCompra_TABLE}= require('./../models/OrdenCompra.model');
const {EsquemaTb_ordenenvio,ORDEN_ENVIO_TABLE}= require('./../models/OrdenEnvio.model');
const {EsquemaTb_ordenProducto,ORDEN_PRODUCTO_TABLE}= require('./../models/OrdenProducto.model');
const {EsquemaTb_permiso,PERMISO_TABLE}= require('./../models/permisos.model');
const {EsquemaTb_producto,PRODUCTO_TABLE}= require('./../models/producto.model');
const {EsquemaTb_productoCat,PRODUCTO_CATEGORIA_TABLE}= require('./../models/ProductoCategoria.model');
const {EsquemaTb_proveedores,PROVEEDOR_TABLE}= require('./../models/proveedores.model');
const {EsquemaTb_rol,ROL_TABLE}= require('./../models/roles.model');
const {EsquemaTb_sucursal,SUCURSAL_TABLE}= require('./../models/sucursales.model');
const {EsquemaTb_usuario,USUARIO_TABLE}= require('./../models/usuarios.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(EsquemaTb_categorias,CATEGORIA_TABLE);
    await queryInterface.createTable(EsquemaTb_clientes,CLIENTE_TABLE);
    await queryInterface.createTable(EsquemaTb_compras,COMPRA_TABLE);
    await queryInterface.createTable(EsquemaTb_direccion,DIRECCION_TABLE);
    await queryInterface.createTable(EsquemaTb_empleados,EMPLEADOS_TABLE);
    await queryInterface.createTable(EsquemaTb_ordencompra,OrdenCompra_TABLE);
    await queryInterface.createTable(EsquemaTb_ordenenvio,ORDEN_ENVIO_TABLE);
    await queryInterface.createTable(EsquemaTb_ordenProducto,ORDEN_PRODUCTO_TABLE);
    await queryInterface.createTable(EsquemaTb_producto,PRODUCTO_TABLE);
    await queryInterface.createTable(EsquemaTb_permiso,PERMISO_TABLE);
    await queryInterface.createTable(EsquemaTb_productoCat,PRODUCTO_CATEGORIA_TABLE);
    await queryInterface.createTable(EsquemaTb_proveedores,PROVEEDOR_TABLE);
    await queryInterface.createTable(EsquemaTb_rol,ROL_TABLE);
    await queryInterface.createTable(EsquemaTb_sucursal,SUCURSAL_TABLE);
    await queryInterface.createTable(EsquemaTb_usuario,USUARIO_TABLE);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
