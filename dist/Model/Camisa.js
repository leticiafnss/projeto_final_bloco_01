"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camisa = void 0;
const Produto_1 = require("./Produto");
class Camisa extends Produto_1.Produto {
    _tamanho;
    constructor(id, nome, preco, estoque, tamanho) {
        super(id, nome, preco, estoque);
        this._tamanho = tamanho;
    }
    get tamanho() {
        return this._tamanho;
    }
    set tamanho(tamanho) {
        this._tamanho = tamanho;
    }
    visualizar() {
        super.visualizar();
        console.log("Tamanho: " + this._tamanho);
    }
}
exports.Camisa = Camisa;
