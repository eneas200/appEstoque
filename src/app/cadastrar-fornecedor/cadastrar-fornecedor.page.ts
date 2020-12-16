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
    console.log(this.fornecedor);
    this._fornecedorService.cadastrarFornecedor(this.fornecedor).subscribe(fornecedor => {
      console.log(fornecedor);
      this.messagemFornecedor();
    });
  }

  async messagemFornecedor() {
    const toast = await this._toastController.create({
      message: `Fornecedor cadastrado com sucesso!`,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

}
