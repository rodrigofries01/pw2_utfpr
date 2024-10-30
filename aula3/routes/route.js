const express = require("express");
const db = require("../config/config_sequelize");
const controllerUsuario = require("../controllers/controllerUsuario");
const controllerComentario = require("../controllers/controllerComentario");
const route = express.Router();

db.sequelize.sync({ force: true }).then(() => {
  console.log("{force = true}");
});

db.Usuario.create({ login: "postgres", senha: "postgres", tipo: 1 });
module.exports = route;

//Home
route.get("/home", function (req, res) {
  res.render("home");
});

//Controller Usuario
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);

//Controller Comentario
route.get("/comentarioCreate", controllerComentario.getCreate);
route.post("/comentarioCreate", controllerComentario.postCreate);
route.get("/comentarioList", controllerComentario.getList);
