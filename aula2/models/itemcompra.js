module.export = (sequelize, Sequelize) => {
  const ItemCompra = sequelize.define("itemcompra", {});
  return ItemCompra;
};
