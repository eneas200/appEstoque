import { Component, OnInit, OnDestroy } from '@angular/core';
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

export class LoginPage implements OnInit, OnDestroy {
  
  public login: Login = new Login();
  
  constructor(

    private _menu: MenuController, 
    private _router: Router,
    private _loginService: LoginService,
    private _funcionarioService: FuncionarioService,
    private _toastController: ToastController
    
  ) { }

  ngOnInit() { }
  ngOnDestroy() {
    this.login = null;
    console.log(this.login," login limpa");
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
      
      this.messagem("Usuário logado com sucesso!");

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
  async messagem(msg) {
    const toast = await this._toastController.create({
      message: `${msg}`,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
  
}