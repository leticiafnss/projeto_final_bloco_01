import { Produto } from "../Model/Produto";
import { ProdutoRepository } from "../Repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

 private listaProdutos: Array<Produto> = new Array<Produto>();
 private id: number = 0;

 procurarPorId(id: number): void {

 let buscaProduto = this.buscarNoArray(id);

 if (buscaProduto != null)
 buscaProduto.visualizar();
 else
 console.log("\nProduto não encontrado!");

 }

 listarTodos(): void {

 for (let produto of this.listaProdutos) {
 produto.visualizar();
 }

 }

 cadastrar(produto: Produto): void {

 this.listaProdutos.push(produto);
 console.log("\nProduto cadastrado com sucesso!");

 }

 atualizar(produto: Produto): void {

 let buscaProduto = this.buscarNoArray(produto.id);

 if (buscaProduto != null) {

 this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;

 console.log("\nProduto atualizado com sucesso!");

 } else

 console.log("\nProduto não encontrado!");

 }

 deletar(id: number): void {

 let buscaProduto = this.buscarNoArray(id);

 if (buscaProduto != null) {

 this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);

 console.log("\nProduto deletado com sucesso!");

 } else

 console.log("\nProduto não encontrado!");

 }

 public gerarId(): number {
 return ++this.id;
 }

 private buscarNoArray(id: number): Produto | null {

 for (let produto of this.listaProdutos) {

 if (produto.id === id)
 return produto;

 }

 return null;

 }

}