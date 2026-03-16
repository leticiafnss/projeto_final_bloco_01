import { Produto } from "./Produto";

export class Bone extends Produto {

 private _cor: string;

 constructor(id: number, nome: string, preco: number, estoque: number, cor: string) {
 super(id, nome, preco, estoque);
 this._cor = cor;
 }

 public get cor(): string {
 return this._cor;
 }

 public set cor(cor: string) {
 this._cor = cor;
 }

 public visualizar(): void {
 super.visualizar();
 console.log("Cor: " + this._cor);
 }

}