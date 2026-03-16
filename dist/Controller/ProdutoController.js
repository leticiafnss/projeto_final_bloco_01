"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
class ProdutoController {
    listaProdutos = new Array();
    id = 0;
    procurarPorId(id) {
        let buscaProduto = this.buscarNoArray(id);
        if (buscaProduto != null)
            buscaProduto.visualizar();
        else
            console.log("\nProduto não encontrado!");
    }
    listarTodos() {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }
    cadastrar(produto) {
        this.listaProdutos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }
    atualizar(produto) {
        let buscaProduto = this.buscarNoArray(produto.id);
        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nProduto atualizado com sucesso!");
        }
        else
            console.log("\nProduto não encontrado!");
    }
    deletar(id) {
        let buscaProduto = this.buscarNoArray(id);
        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nProduto deletado com sucesso!");
        }
        else
            console.log("\nProduto não encontrado!");
    }
    gerarId() {
        return ++this.id;
    }
    buscarNoArray(id) {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null;
    }
}
exports.ProdutoController = ProdutoController;
