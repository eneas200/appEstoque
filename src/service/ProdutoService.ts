import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProdutoService } from "src/interface/IProdutoService";
import { Produto } from "src/models/Produto";
import { Global } from "src/shared/Globais";
import { FuncionarioService } from "./FuncionarioService";
@Injectable({
    'providedIn': 'root'
})
export class ProdutoService  implements IProdutoService {

    public apiurl: string = `${Global.ApiUrl}produtos`;
    public produtos: Produto[] = [];

    constructor(
        private _httpCli:HttpClient,
        private _funcionarioService: FuncionarioService
        
        ) {}


    cadastrarProduto(produto: Produto): Observable<Produto> {
        // validando atributos
        this.verificandoAtributos(produto);
        // enviando dados para o back-end que irá salvar no banco
        return this._httpCli.post<Produto>(this.apiurl, produto);

    }

    alterarProduto(produto: Produto): Observable<Produto> {
        throw new Error("Method not implemented.");
    }
    buscarProduto(): Observable<Produto> {
        
        return this._httpCli.get<Produto>(`${this.apiurl}/getProdutos`);
    }
    listaProduto(): Promise<Produto[]> {
        this.produtos = [];
        const promise = new Promise<Produto[]>(async (resolve, reject) => {
            try { 
                // forma 1
                // const produto = await this.buscarProduto().toPromise();
                // this.produtos = produto;
                // resolve(produto);

                // forma 2
                this.buscarProduto().subscribe(res => {
                    this.produtos.push(res);
                    
                    resolve(this.produtos);
                });

            } catch(e) {
               reject(e); 
            }
        });
        return promise;
    }

    verificandoAtributos(produto: Produto) : void {
        if(!produto.nome_produto) throw new Error("campo nome do produto deve ser preenchido");
        if(!produto.preco_produto) throw new Error("campo preço do produto deve ser preenchido");
        if(!produto.quantidade_produto) throw new Error("campo quantidade do produto deve ser preenchido");
        if(!produto.categoria) throw new Error("campo categoria do produto deve ser preenchido");
    }
   

}