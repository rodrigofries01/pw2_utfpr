const db = require("./config/db");
const path = require("path");
const express = require("express");
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

db.sequelize.sync({ force: true }).then(() => {
  console.log("{ force : true }");
});

app.get("/pessoas", function (req, res) {
  async () => {
    const pessoas = await db.Pessoa.findAll();
    res.send(JSON.stringify(pessoas));
  };
});

app.get("/cadastro", function (req, res) {
  res.sendFile(path.join(__dirname + "/cadastro.html"));
});

app.post("/cadastrarPessoa", function (req, res) {
  db.Pessoa.create({
    nome: req.body.nome,
  });
  res.send("Pessoa cadastrada");
});

app.put("/editarPessoa", function (req, res) {
  db.Pessoa.put({
    nome: req.body.nome,
  });
  res.send("Pessoa editada");
});

app.delete("/deletarPessoa", function (req, res) {
  db.Pessoa.delete({
    nome: req.body.nome,
  });
  res.send("Pessoa deletada");
});

app.listen(8081, function () {
  console.log("Servidor no http://localhost:8081");
});
