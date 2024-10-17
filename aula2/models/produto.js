module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produto", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: Sequelize.STRING,
  });
  return Produto;
};
