import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Funcionario } from 'src/models/Funcionario';
import { FuncionarioService } from 'src/service/FuncionarioService';

@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.page.html',
  styleUrls: ['./painel-usuario.page.scss'],
})
export class PainelUsuarioPage implements OnInit {

  public funcionario: Funcionario = new Funcionario();

  constructor(
    private _funcionarioService: FuncionarioService,
    private _toastController: ToastController
  ) { }

  ionViewWillEnter() {

      this.funcionario = this._funcionarioService.result();

  }

  ngOnInit() {
  }

  editarCadastro()
  {
    console.log(this.funcionario);
    this._funcionarioService.alterarFuncionario(this.funcionario).subscribe(funcionario => {
      if(funcionario) {

        this._funcionarioService.guardaLoginFuncionario(funcionario);
        this.messagemAlterandoDados(`Dados alterado com sucesso!`);

      }
    });
    
  }

  // exibe menssagem
  async messagemAlterandoDados(texto: string) {
    const toast = await this._toastController.create({
      message: texto,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

}
