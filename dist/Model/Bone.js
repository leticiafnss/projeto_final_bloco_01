"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bone = void 0;
const Produto_1 = require("./Produto");
class Bone extends Produto_1.Produto {
    _cor;
    constructor(id, nome, preco, estoque, cor) {
        super(id, nome, preco, estoque);
        this._cor = cor;
    }
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
    }
    visualizar() {
        super.visualizar();
        console.log("Cor: " + this._cor);
    }
}
exports.Bone = Bone;
