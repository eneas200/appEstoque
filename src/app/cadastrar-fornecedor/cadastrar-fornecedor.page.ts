import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Fornecedor } from 'src/models/Fornecedor';
import { FornecedorService } from 'src/service/FornecedorService';
import { GlobalService } from 'src/service/GlobalService';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.page.html',
  styleUrls: ['./cadastrar-fornecedor.page.scss'],
})
export class CadastrarFornecedorPage implements OnInit {
  public fornecedor: Fornecedor = new Fornecedor();
  
  constructor(

    private _menu: MenuController,
    private _fornecedorService: FornecedorService,
    private _globalService: GlobalService

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this._menu.swipeGesture(false);
  }

  salvarFornecedor(){
    
    this._fornecedorService.cadastrarFornecedor(this.fornecedor).subscribe(fornecedor => {
    
      this._globalService.exibeMessage(`Empresa, ${fornecedor.nome_empresa_fornecedor} cadastrado com sucesso!`);

      this._globalService.mudaPagina( 'ver-fornecedores' );

    });
  }

  voltarFornecedor() 
  {
    this._globalService.mudaPagina( 'ver-fornecedores' ); // (OTIMIZAÇÃO)
  }

}
