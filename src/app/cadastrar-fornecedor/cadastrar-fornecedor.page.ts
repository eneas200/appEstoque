import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Fornecedor } from 'src/models/Fornecedor';
import { FornecedorService } from 'src/service/FornecedorService';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.page.html',
  styleUrls: ['./cadastrar-fornecedor.page.scss'],
})
export class CadastrarFornecedorPage implements OnInit {
  public fornecedor: Fornecedor = new Fornecedor();
  constructor(
    private _menu: MenuController,
    private _router: Router,
    private _fornecedorService: FornecedorService,
    private _toastController: ToastController
  ) {
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this._menu.swipeGesture(false);
  }

  salvarFornecedor(){
    
    this._fornecedorService.cadastrarFornecedor(this.fornecedor).subscribe(fornecedor => {
    
      this.messagemFornecedor("Fornecedor cadastrado com sucesso!");

      this._router.navigate(['/ver-fornecedores'])

    });
  }

  async messagemFornecedor(texto) {
    const toast = await this._toastController.create({
      message: `${texto}`,
      position: 'bottom',
      duration: 1500
    });
    toast.present();
  }

}
