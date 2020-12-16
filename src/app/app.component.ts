import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { FuncionarioService } from 'src/service/FuncionarioService';
import { Funcionario } from 'src/models/Funcionario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Painel funcionário',
      url: 'painel-usuario',
      icon: 'person'
    },
    {
      title: 'Produtos',
      url: 'ver-produto',
      icon: 'today'
    },
    {
      title: 'Fornecedores',
      url: 'ver-fornecedores',
      icon: 'people'
    },    
  ];
  
  public funcionario: Funcionario = new Funcionario();
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _menu: MenuController,
    private _router: Router,
    private _funcionarioService: FuncionarioService
  ) {
    this.initializeApp();
    this.capturaRota();
     
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  efetuarLogout(){

    // limpando o localStorage
    localStorage.clear();
    // bloquear o menu lateral
    this._menu.swipeGesture(false);
    // redirecionar para pagina login
    this._router.navigate(['/login']);
  }

  buscaFuncionarioOnLine() {
    const funcionarioOn: Funcionario = this._funcionarioService.result();
     
    if (funcionarioOn) {
      this.funcionario = funcionarioOn;
    }
  }

  capturaRota() {
    this._router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        
        this.buscaFuncionarioOnLine();
      }
      
    });
  }

}
