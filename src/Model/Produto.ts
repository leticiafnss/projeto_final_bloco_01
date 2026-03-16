export abstract class Produto {

 private _id: number;
 private _nome: string;
 private _preco: number;
 private _estoque: number;

 constructor(id: number, nome: string, preco: number, estoque: number) {
 this._id = id;
 this._nome = nome;
 this._preco = preco;
 this._estoque = estoque;
 }

 public get id(): number {
 return this._id;
 }

 public get nome(): string {
 return this._nome;
 }

 public get preco(): number {
 return this._preco;
 }

 public get estoque(): number {
 return this._estoque;
 }

 public set nome(nome: string) {
 this._nome = nome;
 }

 public set preco(preco: number) {
 this._preco = preco;
 }

 public set estoque(estoque: number) {
 this._estoque = estoque;
 }

 public visualizar(): void {
 console.log("*******************************");
 console.log("Produto ID: " + this._id);
 console.log("Nome: " + this._nome);
 console.log("Preço: " + this._preco);
 console.log("Estoque: " + this._estoque);
 }

}