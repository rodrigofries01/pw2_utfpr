// Importar modulo http
const path = require('path');
const express = require('express');
const app = express();
const url = require('url');

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json());
app.get('/cadastro', function (req, res) { res.sendFile(path.join(__dirname + '/cadastro.html')) });

app.post('/confirma/', function (req, res) { res.send('Cadastro concluido: ' + req.body.nome + ' ' + req.body.sobrenome) });

app.get('/confirma', function (req, res) {
  q = url.parse(req.url, true);
  res.send('Cadastro concluido ' + query.nome + ' ' + query.sobrenome);
});

app.listen(8081, function () {
  console.log("Servidor rodando na porta http://localhost:8081");
});

// criar servidor na porta 8081 - versão sem

// http.createServer(function (req, res) {
//   fs.readFile('demo.html', function (err, data) {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8081);





// TODO pesquisar monitor positivo 