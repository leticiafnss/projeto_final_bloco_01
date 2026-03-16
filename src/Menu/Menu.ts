import * as readline from 'readline-sync';
import { ProdutoController } from "../Controller/ProdutoController";
import { Camisa } from "../Model/Camisa";

const produtos = new ProdutoController();

let opcao: number;
let id: number;
let nome: string;
let preco: number;
let estoque: number;
let tamanho: string;

while (true) {

console.log("\n*****************************************************");
console.log(" ");
console.log(" LOJA TODO PODEROSO TIMÃO ");
console.log(" ");
console.log("*****************************************************");
console.log(" ");
console.log(" 1 - Cadastrar Produto ");
console.log(" 2 - Listar Produtos ");
console.log(" 3 - Buscar Produto por ID ");
console.log(" 4 - Atualizar Produto ");
console.log(" 5 - Deletar Produto ");
console.log(" 6 - Sair ");
console.log(" ");
console.log("*****************************************************");

opcao = readline.questionInt("\nDigite uma opcao: ");

switch (opcao) {

case 1:

console.log("\nCadastrar Produto\n");

nome = readline.question("Nome do produto: ");
preco = readline.questionFloat("Preco: ");
estoque = readline.questionInt("Estoque: ");
tamanho = readline.question("Tamanho da camisa: ");

produtos.cadastrar(
new Camisa(produtos.gerarId(), nome, preco, estoque, tamanho)
);

break;

case 2:

console.log("\nListar Produtos\n");

produtos.listarTodos();

break;

case 3:

console.log("\nBuscar Produto\n");

id = readline.questionInt("Digite o ID do produto: ");

produtos.procurarPorId(id);

break;

case 4:

console.log("\nAtualizar Produto\n");

id = readline.questionInt("Digite o ID do produto: ");

nome = readline.question("Novo nome: ");
preco = readline.questionFloat("Novo preco: ");
estoque = readline.questionInt("Novo estoque: ");
tamanho = readline.question("Novo tamanho: ");

produtos.atualizar(
new Camisa(id, nome, preco, estoque, tamanho)
);

break;

case 5:

console.log("\nDeletar Produto\n");

id = readline.questionInt("Digite o ID do produto: ");

produtos.deletar(id);

break;

case 6:

console.log("\nObrigado por utilizar a Loja Todo Poderoso Timão!");

process.exit(0);

default:

console.log("\nOpcao invalida!");

}

}