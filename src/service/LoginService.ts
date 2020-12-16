import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ILoginService } from "src/interface/ILoginService";
import { Funcionario } from "src/models/Funcionario";
import { Login } from "src/models/Login";
import { Global } from 'src/shared/Globais';
import { HttpClient } from "@angular/common/http";
@Injectable({
    'providedIn': 'root'
})

export class LoginService implements ILoginService {
    
    public apiurl: string = `${Global.ApiUrl}funcionarios/login`;

    constructor( private _httpCli: HttpClient ) { }

    realizarLogin(login: Login): Observable<Funcionario> {
        if(!login.email_funcionario) throw new Error("preencha o campo email");
        if(!login.senha_funcionario) throw new Error("preencha o campo senha");
        
        return this._httpCli.post<Funcionario>(this.apiurl, login);
    }
}