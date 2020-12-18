import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Funcionario } from 'src/models/Funcionario';
import { FuncionarioService } from 'src/service/FuncionarioService';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.page.html',
  styleUrls: ['./cadastrar-funcionario.page.scss'],
})
export class CadastrarFuncionarioPage implements OnInit {
  public funcionario: Funcionario = new Funcionario();
  constructor(
    private _menu: MenuController,
    private _funcionarioService: FuncionarioService,
    private _router: Router,
    private _toastController: ToastController
  ) { }

  ngOnInit() {
  }
  // efetuarCadastro
  efetuarCadastro()
  {
    
    console.log(this.funcionario);
   
    this._funcionarioService.cadastrarFuncionario(this.funcionario).subscribe(funcionario => {
      
      console.log(funcionario);
      
      this.messageCadastro();

      this._router.navigate(['/login']);

    });

  }

  // exibe menssagem
  async messageCadastro() {
    const toast = await this._toastController.create({
      message: `Cadastro efetuado com êxito!`,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  // manipulando o menu lateral
  ionViewWillEnter ()
  {
    this._menu.swipeGesture(false)
  }

  
  ngOnDestroy(){
    console.log("limpando variavel funcionario");
    this.funcionario=null;

  }

}
