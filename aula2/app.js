import db from "./config/db.js";
import { join } from "path";
import express, { urlencoded } from "express";
const app = express();
app.use(
  urlencoded({
    extended: true,
  })
);

app.get("/cadastro", function (req, res) {
  res.sendFile(join(__dirname + "/cadastro.html"));
});

// // CRUD FOR PESSOA
app.get("/pessoas", function (req, res) {
  async () => {
    const pessoas = await db.Pessoa.findAll();
    res.send(JSON.stringify(pessoas));
  };
});

// app.post("/cadastrarPessoa", function (req, res) {
//   db.Pessoa.create({
//     nome: req.body.nome,
//   });
//   res.send("Pessoa cadastrada");
// });

// app.put("/editarPessoa", function (req, res) {
//   db.Pessoa.put({
//     nome: req.body.nome,
//   });
//   res.send("Pessoa editada");
// });

// app.delete("/deletarPessoa", function (req, res) {
//   db.Pessoa.delete({
//     nome: req.body.nome,
//   });
//   res.send("Pessoa deletada");
// });

// //CRUD FOR PRODUTO
// app.get("/produtos", function (req, res) {
//   async () => {
//     const produtos = await db.Produto.findAll();
//     res.send(JSON.stringify(produtos));
//   };
// });

// app.post("/cadastrarProduto", function (req, res) {
//   db.Produto.post({
//     nome: req.body.nome,
//   });
//   res.send("Produto cadastrado!");
// });

// // app.put("/editarProduto", function (req, res) {
// //   db.Produto.put({
// //     nome: req.body.nome,
// //   });
// //   res.send("Produto Editado");
// // });

// // app.delete("/deletarProduto", function (req, res) {
// //   db.Produto.delete({
// //     nome: req.body.nome,
// //   });
// //   res.send("Produto deletado");
// // });

app.listen(8081, function () {
  console.log("Servidor no http://localhost:8081");
});
