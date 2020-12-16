import { Observable } from "rxjs";
import { Produto } from "src/models/Produto";

export interface IProdutoService {
    cadastrarProduto(produto: Produto): Observable<Produto>;
    alterarProduto(produto: Produto): Observable<Produto>;
    buscarProduto(): Observable<Produto>;
    listaProduto(): Promise<Produto[]>;
}