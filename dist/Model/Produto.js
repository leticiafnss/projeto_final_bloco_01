"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    _id;
    _nome;
    _preco;
    _estoque;
    constructor(id, nome, preco, estoque) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get preco() {
        return this._preco;
    }
    get estoque() {
        return this._estoque;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set preco(preco) {
        this._preco = preco;
    }
    set estoque(estoque) {
        this._estoque = estoque;
    }
    visualizar() {
        console.log("*******************************");
        console.log("Produto ID: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Preço: " + this._preco);
        console.log("Estoque: " + this._estoque);
    }
}
exports.Produto = Produto;
