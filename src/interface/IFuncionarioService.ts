import { Observable } from "rxjs";
import { Funcionario } from "src/models/Funcionario";

export interface IFuncionarioService {
    cadastrarFuncionario(funcionario: Funcionario): Observable<Funcionario>;
    buscarFuncionario(id_funcionario: Funcionario): Observable<Funcionario>;
    alterarFuncionario(funcionario: Funcionario): Observable<Funcionario>;
}
