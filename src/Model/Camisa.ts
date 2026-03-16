import { Produto } from "./Produto";

export class Camisa extends Produto {

 private _tamanho: string;

 constructor(id: number, nome: string, preco: number, estoque: number, tamanho: string) {
 super(id, nome, preco, estoque);
 this._tamanho = tamanho;
 }

 public get tamanho(): string {
 return this._tamanho;
 }

 public set tamanho(tamanho: string) {
 this._tamanho = tamanho;
 }

 public visualizar(): void {
 super.visualizar();
 console.log("Tamanho: " + this._tamanho);
 }

}

