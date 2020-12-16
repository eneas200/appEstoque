import { Observable } from "rxjs";
import { Fornecedor } from "src/models/Fornecedor";

export interface IFornecedorService {
    cadastrarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor>;
    alterarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor>;
    buscarFornecedor (): Observable<Fornecedor>;
}