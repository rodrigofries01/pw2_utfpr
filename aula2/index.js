import { Sequelize } from "sequelize";
const sequelize = new Sequelize("web2_bd", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

import pessoa from "./models/pessoa";
pessoa.sync({ force: true });
pessoa.create({ nome: "Rodrigo", descricao: "Desenvolvedor" });

(async () => {
  const pessoas = await pessoa.findByPk(1);
  console.log(pessoas.dataValues.nome);
})();

(async () => {
  const pessoas = await pessoa.findAll();
  console.log(JSON.stringify(pessoas[0].dataValues.descricao));
  console.log(JSON.stringify(pessoas[1].dataValues.nome));
})();

(async () => {
  let p = await pessoa.findByPk(1);
  p.nome = "Otis";
  const resultdoSave = await p.save();
  console.log(resultdoSave);
})();

(async () => {
  let p = await findByPk(2);
  p.destroy();
})();

(async () => {
  pessoa.destroy({ where: { id: 2 } });
})();
