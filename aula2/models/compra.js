module.export = (sequelize, Sequelize) => {
  const Compra = sequelize.define("produto", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor_total: Sequelize.DOUBLE,
  });
  return Compra;
};
