"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const colors_1 = __importDefault(require("colors"));
const ProdutoController_1 = require("../Controller/ProdutoController");
const Camisa_1 = require("../Model/Camisa");
const Bone_1 = require("../Model/Bone");
const produtos = new ProdutoController_1.ProdutoController();
let opcao;
let id;
let nome;
let preco;
let estoque;
let tamanho;
while (true) {
    console.log(colors_1.default.red("\n====================================================="));
    console.log(colors_1.default.white.bold(" ⚽ LOJA TODO PODEROSO TIMÃO ⚽ "));
    console.log(colors_1.default.white(" Produtos Oficiais do Sport Club Corinthians "));
    console.log(colors_1.default.red("====================================================="));
    console.log(colors_1.default.white("1 - Cadastrar Produto"));
    console.log(colors_1.default.white("2 - Listar Produtos"));
    console.log(colors_1.default.white("3 - Buscar Produto por ID"));
    console.log(colors_1.default.white("4 - Atualizar Produto"));
    console.log(colors_1.default.white("5 - Deletar Produto"));
    console.log(colors_1.default.red("6 - Sair"));
    console.log(colors_1.default.red("====================================================="));
    opcao = readline.questionInt(colors_1.default.yellow("\nDigite uma opcao: "));
    switch (opcao) {
        case 1:
            console.log(colors_1.default.green("\nCadastrar Produto\n"));
            let tipo = readline.questionInt("Tipo de produto (1-Camisa / 2-Bone): ");
            nome = readline.question("Nome do produto: ");
            preco = readline.questionFloat("Preco: ");
            estoque = readline.questionInt("Estoque: ");
            if (tipo === 1) {
                tamanho = readline.question("Tamanho da camisa: ");
                produtos.cadastrar(new Camisa_1.Camisa(produtos.gerarId(), nome, preco, estoque, tamanho));
            }
            else if (tipo === 2) {
                let cor = readline.question("Cor do bone: ");
                produtos.cadastrar(new Bone_1.Bone(produtos.gerarId(), nome, preco, estoque, cor));
            }
            else {
                console.log(colors_1.default.red("Tipo de produto invalido!"));
            }
            break;
        case 2:
            console.log(colors_1.default.green("\nLista de Produtos\n"));
            produtos.listarTodos();
            break;
        case 3:
            console.log(colors_1.default.green("\nBuscar Produto\n"));
            id = readline.questionInt("Digite o ID do produto: ");
            produtos.procurarPorId(id);
            break;
        case 4:
            console.log(colors_1.default.green("\nAtualizar Produto\n"));
            id = readline.questionInt("Digite o ID do produto: ");
            nome = readline.question("Novo nome: ");
            preco = readline.questionFloat("Novo preco: ");
            estoque = readline.questionInt("Novo estoque: ");
            tamanho = readline.question("Novo tamanho: ");
            produtos.atualizar(new Camisa_1.Camisa(id, nome, preco, estoque, tamanho));
            break;
        case 5:
            console.log(colors_1.default.green("\nDeletar Produto\n"));
            id = readline.questionInt("Digite o ID do produto: ");
            produtos.deletar(id);
            break;
        case 6:
            console.log(colors_1.default.red("\nObrigado por utilizar a Loja Todo Poderoso Timão! ⚽"));
            process.exit(0);
        default:
            console.log(colors_1.default.red("\nOpcao invalida!"));
    }
}
