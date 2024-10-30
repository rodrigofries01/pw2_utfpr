const Sequelize = require("sequelize");
const sequelize = new Sequelize("web2_db", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require("../models/relational/usuario.js")(sequelize, Sequelize);
module.exports = db;
