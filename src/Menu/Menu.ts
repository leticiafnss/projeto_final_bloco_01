import * as readline from 'readline-sync';
import colors from 'colors';
import { ProdutoController } from "../Controller/ProdutoController";
import { Camisa } from "../Model/Camisa";
import { Bone } from "../Model/Bone";

const produtos = new ProdutoController();

let opcao: number;
let id: number;
let nome: string;
let preco: number;
let estoque: number;
let tamanho: string;

while (true) {

console.log(colors.red("\n====================================================="));
console.log(colors.white.bold(" ⚽ LOJA TODO PODEROSO TIMÃO ⚽ "));
console.log(colors.white(" Produtos Oficiais do Sport Club Corinthians "));
console.log(colors.red("====================================================="));

console.log(colors.white("1 - Cadastrar Produto"));
console.log(colors.white("2 - Listar Produtos"));
console.log(colors.white("3 - Buscar Produto por ID"));
console.log(colors.white("4 - Atualizar Produto"));
console.log(colors.white("5 - Deletar Produto"));
console.log(colors.red("6 - Sair"));

console.log(colors.red("====================================================="));

opcao = readline.questionInt(colors.yellow("\nDigite uma opcao: "));

switch (opcao) {

case 1:

console.log(colors.green("\nCadastrar Produto\n"));

let tipo = readline.questionInt("Tipo de produto (1-Camisa / 2-Bone): ");

nome = readline.question("Nome do produto: ");
preco = readline.questionFloat("Preco: ");
estoque = readline.questionInt("Estoque: ");

if (tipo === 1) {

 tamanho = readline.question("Tamanho da camisa: ");

 produtos.cadastrar(
 new Camisa(produtos.gerarId(), nome, preco, estoque, tamanho)
 );

} else if (tipo === 2) {

 let cor = readline.question("Cor do bone: ");

 produtos.cadastrar(
 new Bone(produtos.gerarId(), nome, preco, estoque, cor)
 );

} else {

 console.log(colors.red("Tipo de produto invalido!"));

}

break;

case 2:

console.log(colors.green("\nLista de Produtos\n"));

produtos.listarTodos();

break;

case 3:

console.log(colors.green("\nBuscar Produto\n"));

id = readline.questionInt("Digite o ID do produto: ");

produtos.procurarPorId(id);

break;

case 4:

console.log(colors.green("\nAtualizar Produto\n"));

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

console.log(colors.green("\nDeletar Produto\n"));

id = readline.questionInt("Digite o ID do produto: ");

produtos.deletar(id);

break;

case 6:

console.log(colors.red("\nObrigado por utilizar a Loja Todo Poderoso Timão! ⚽"));

process.exit(0);

default:

console.log(colors.red("\nOpcao invalida!"));

}

}

