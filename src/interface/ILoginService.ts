import { Observable } from "rxjs";
import { Funcionario } from "src/models/Funcionario";
import { Login } from "src/models/Login";

export interface ILoginService {
    realizarLogin(login: Login): Observable<Funcionario>;
}