import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFuncionarioService } from "src/interface/IFuncionarioService";
import { Funcionario } from "src/models/Funcionario";
import { Global } from "src/shared/Globais";
@Injectable({
    'providedIn': 'root'
})

export class FuncionarioService implements IFuncionarioService {
    public apiurl: string = `${Global.ApiUrl}funcionarios`;

    constructor(private _httpClint: HttpClient){

    }

    cadastrarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
        
        this.validateFuncionario(funcionario);

        return this._httpClint.post<Funcionario>(this.apiurl, funcionario);
    }

    // verifica se os dados foram preenchidos corretamente!
    validateFuncionario(funcionario: Funcionario) {
        if(!funcionario.nome_funcionario) throw new Error("preencha o campo nome");
        if(!funcionario.email_funcionario) throw new Error("preenhca o campo email");
        if(!funcionario.senha_funcionario) throw new Error("preencha o campo senha");
        if(funcionario.senha_funcionario != funcionario.confirmarSenha_funcionario) throw new Error("senhas não conhecidem");
    }

    // armazenamento temporario de dados
    guardaLoginFuncionario(funcionario: Funcionario): void {
        
        localStorage.setItem('funcionarioOnLine', JSON.stringify(funcionario))
    }

    // método retorna dados do usuario logado
    result() : Funcionario {

        let funcionario = <Funcionario>JSON.parse(localStorage.getItem('funcionarioOnLine'));

        return funcionario;
    }

    // busca dados do usuario no banco
    buscarFuncionario(id_funcionario: Funcionario): Observable<Funcionario> {
        throw new Error("Method not implemented.");
    }


    // altera informações do usuario no banco
    alterarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
        if(!funcionario.nome_funcionario) throw new Error("Preencha o campo nome");
        if(!funcionario.email_funcionario) throw new Error("preenhca o campo email");

        if(funcionario.senha_funcionario || funcionario.confirmarSenha_funcionario) {
            if(funcionario.senha_funcionario != funcionario.confirmarSenha_funcionario){
                throw new Error("As senha não conhecidem");
            }
        }
        
        
        return this._httpClint.put<Funcionario>(`${this.apiurl}/${funcionario.id}`, funcionario);
    }
    

}