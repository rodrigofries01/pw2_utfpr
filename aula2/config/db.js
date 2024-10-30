import Sequelize from "sequelize";
//const sequelize = new Sequelize('database', 'username', 'password', {
const sequelize = new Sequelize("web2_bd", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Pessoa = require("../models/pessoa.js").default(sequelize, Sequelize);
db.Compra = require("../models/compra.js")(sequelize, Sequelize);
db.Produto = require("../models/produto.js")(sequelize, Sequelize);
db.ItemCompra = require("../models/itemCompra.js")(sequelize, Sequelize);

//Relacionamentos entre as tabelas
db.Pessoa.hasMany(db.Compra);
db.Compra.belongsToMany(db.Produto, { through: db.ItemCompra });
export default db;
