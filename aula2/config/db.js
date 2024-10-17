const Sequelize = require("sequelize");
const sequelize = new Sequelize("web2_bd", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Pessoa = require("../models/pessoa.js")(sequelize, Sequelize);
db.Compra = require("../models/compra.js")(sequelize, Sequelize);
db.Produto = require("../models/produto.js")(sequelize, Sequelize);
db.ItemCompra = require("../models/itemcompra.js")(sequelize, Sequelize);

// Relacionamentos entre as tabelas

db.Pessoa.hasMany(db.Compra);
db.Compra.belongsToMany(db.Produto, { through: db.ItemCompra });
module.exports = db;
