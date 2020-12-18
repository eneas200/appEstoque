import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Funcionario } from 'src/models/Funcionario';
import { FuncionarioService } from 'src/service/FuncionarioService';
import { GlobalService } from 'src/service/GlobalService';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.page.html',
  styleUrls: ['./cadastrar-funcionario.page.scss'],
})
export class CadastrarFuncionarioPage implements OnInit, OnDestroy {
  public funcionario: Funcionario = new Funcionario();
  
  constructor(
    
    private _menu: MenuController,
    private _funcionarioService: FuncionarioService,
    private _globalService: GlobalService

  ) { }

  ngOnInit() { }

  // efetuarCadastro
  efetuarCadastro()
  {
    console.log(this.funcionario);
   
    this._funcionarioService.cadastrarFuncionario(this.funcionario).subscribe(funcionario => {
      
      console.log(funcionario);
      
      this._globalService.exibeMessage(`Cadastro efetuado com êxito!`);

      this._globalService.mudaPagina( 'login' );

    });

  }

  // manipulando o menu lateral
  ionViewWillEnter ()
  {
    this._menu.swipeGesture(false);
  }
  
  ngOnDestroy()
  {
    this.funcionario = null;
  }

  voltarLogin()
  {
    this._globalService.mudaPagina( 'login' ); 
  }

}
