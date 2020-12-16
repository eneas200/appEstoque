import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

import { Login } from 'src/models/Login';
import { FuncionarioService } from 'src/service/FuncionarioService';
import { LoginService } from 'src/service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  public login: Login = new Login();
  
  constructor(

    private _menu: MenuController, 
    private _router: Router,
    private _loginService: LoginService,
    private _funcionarioService: FuncionarioService,
    private _toastController: ToastController

  ) { }

  ngOnInit() { }
  
  // manipulando o menu lateral
  ionViewWillEnter() {
    this._menu.swipeGesture(false);
  }
   
  // funções da pagina login
 efetuarLogin() {
    // efetuarLogin
    this._loginService.realizarLogin(this.login).subscribe(funcionario => {

      console.log(funcionario);
      
      this.messagemLogin();

      this._funcionarioService.guardaLoginFuncionario(funcionario);

      this._router.navigate(['/ver-produto']);
    });
  }

  // executado quando o usuario clica no botao cadastrar
  efetuarCadastro() 
  {
    this._router.navigate( [ '/cadastrar-funcionario' ] );
  }

  // exibe menssagem
  async messagemLogin() {
    const toast = await this._toastController.create({
      message: `Usuário logado com sucesso!`,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
  
}