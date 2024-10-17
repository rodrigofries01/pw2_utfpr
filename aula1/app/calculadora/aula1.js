const random = require('lodash');
const calculadoraSoma = require('../../modules/adicao');
const calculadoraSub = require('../../modules/subtracao');
const calculadoraMult = require('../../modules/multiplicacao');
const calculadoraDiv = require('../../modules/divisao');

console.log("Escolha a operacao:")
console.log("1 - adicao");
console.log("2 - subtracao");
console.log("3 - multiplicacao");
console.log("4 - divisao\n");
let operacao = random.random(1, 4);
switch (operacao) {
  case 1:
    console.log("O resultado da adicao é: " + calculadoraSoma.adicao(11, 11));
    break;
  case 2:
    console.log("O resultado da subtracao é: " + calculadoraSub.subtracao(11, 11));
    break;
  case 3:
    console.log("O resultado da multiplicacao é: " + calculadoraMult.multiplicacao(11, 11));
    break;
  case 4:
    console.log("O resultado da divisao é: " + calculadoraDiv.divisao(11, 11));
    break;
  default:
    console.log("operacao invalida"); break;
}
