import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Aline";
cliente1.cpf = 34679652888;
cliente1.rg = 37277961;

const cliente2 = new Cliente();
cliente2.nome = "Jorge";
cliente2.cpf = 15327793901;
cliente2.rg = 1523697;


const ContaCorrenteAline = new ContaCorrente();
ContaCorrenteAline.agencia = 1001;
ContaCorrenteAline.cliente = cliente1;
ContaCorrenteAline.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Aline";
conta2.cliente.cpf = 34679652888;
conta2.agencia = 102;


let valor = 200;
ContaCorrenteAline.transferir(valor, conta2);

console.log("valor:", valor);
console.log(conta2);