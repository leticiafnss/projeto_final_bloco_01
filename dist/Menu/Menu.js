"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
let opcao;
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
    opcao = readline.questionInt("\nDigite uma opção: ");
    switch (opcao) {
        case 1:
            console.log("\nCadastrar Produto\n");
            break;
        case 2:
            console.log("\nListar Produtos\n");
            break;
        case 3:
            console.log("\nBuscar Produto por ID\n");
            break;
        case 4:
            console.log("\nAtualizar Produto\n");
            break;
        case 5:
            console.log("\nDeletar Produto\n");
            break;
        case 6:
            console.log("\nSistema finalizado. Obrigado por utilizar a Loja Todo Poderoso Timão!");
            process.exit(0);
        default:
            console.log("\nOpção inválida!");
    }
}
