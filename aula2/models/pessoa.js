export default (sequelize, Sequelize) => {
  const Pessoa = sequelize.define("pessoa", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  return Pessoa;
};
