import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

import { Login } from 'src/models/Login';
import { FuncionarioService } from 'src/service/FuncionarioService';
import { GlobalService } from 'src/service/GlobalService';
import { LoginService } from 'src/service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit, OnDestroy {
  
  public login: Login = new Login();
  
  constructor(

    private _menu: MenuController, 
    private _globalService: GlobalService,
    private _loginService: LoginService,
    private _funcionarioService: FuncionarioService
    
  ) { }

  ngOnInit() { }

  ionViewWillLeave() {
    if(this.login) {
      this.login.email_funcionario = null;
      this.login.senha_funcionario = null;
    };
  }
  ngOnDestroy() {
  }

  // manipulando o menu lateral
  ionViewWillEnter() {
    this._menu.swipeGesture(false);

  }

  // funções da pagina login
  efetuarLogin() {
    
    // efetuarLogin
    console.log(this.login);
    this._loginService.realizarLogin(this.login).subscribe(funcionario => {

      console.log(funcionario);
      
      this._globalService.exibeMessage( "Usuário logado com sucesso!" );

      this._funcionarioService.guardaLoginFuncionario( funcionario );

      this._globalService.mudaPagina( 'ver-produto' );
    });
  }

  // executado quando o usuario clica no botao cadastrar
  efetuarCadastro() // (OTIMIZAÇÃO)
  {
    this._globalService.mudaPagina( 'cadastrar-funcionario' );
  }
  
}