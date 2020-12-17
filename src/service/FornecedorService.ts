 
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFornecedorService } from "src/interface/IFornecedorService";
import { Fornecedor } from "src/models/Fornecedor";
import { Global } from "src/shared/Globais";
@Injectable({
    'providedIn': 'root'
})

export class FornecedorService implements IFornecedorService {
    
    public apiUrl: string = `${Global.ApiUrl}fornecedor`;

    public fornecedorAll: Fornecedor[] = new Array<Fornecedor>();

    constructor(private _httpClient: HttpClient){}

    cadastrarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        
        this.analisaAtributos(fornecedor);

        return this._httpClient.post<Fornecedor>(this.apiUrl, fornecedor);
    }

    analisaAtributos(fornecedor: Fornecedor) {
    
        if(!fornecedor.nome_empresa_fornecedor) throw new Error("Preencha o campo nome empresa");
    
        if(!fornecedor.nome_intermediador) throw new Error("preencha o campo nome responsável");
    
        if(!fornecedor.email_fornecedor) throw new Error("preencha o campo email da empresa");
    
        if(!fornecedor.urlsite_fornecedor) throw new Error("preencha o campo url do site");

    }


    alterarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
        throw new Error("Method not implemented.");
    }
    
    buscarFornecedor(): Observable<Fornecedor[]> {
        
        return this._httpClient.get<Fornecedor[]>(`${this.apiUrl}/getFornecedor`);

    }

    listarAllFornecedores(): Promise<Fornecedor[]>{

        const promise = new Promise<Fornecedor[]>(async (resolve, reject) => {

            try {
                let fornecedor = await this.buscarFornecedor();

                fornecedor.subscribe(resposta => {
                    
                    this.fornecedorAll = resposta;

                    resolve(this.fornecedorAll);
                });

            } catch(err) {

                reject(err);
            }
        });
        
        return promise;
    }
    
}