import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Aline", 34679652888);
const cliente2 = new Cliente("Jorge", 15327793901);

const ContaCorrenteAline = new ContaCorrente(1001, cliente1);


ContaCorrenteAline.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
ContaCorrenteAline.transferir(valor, conta2);
console.log(ContaCorrente.numeroDeContas);
console.log(cliente2);
console.log(cliente1);