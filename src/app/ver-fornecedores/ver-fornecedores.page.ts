import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Fornecedor } from 'src/models/Fornecedor';
import { FornecedorService } from 'src/service/FornecedorService';

@Component({
  selector: 'app-ver-fornecedores',
  templateUrl: './ver-fornecedores.page.html',
  styleUrls: ['./ver-fornecedores.page.scss'],
})

export class VerFornecedoresPage implements OnInit {
  public listaFornecedor: Fornecedor[] = new Array<Fornecedor>();
    
  constructor(
    private _router: Router,
    private _fornecedorServices: FornecedorService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    
    this.buscarFornecedores();
  }

  async buscarFornecedores(){

    this.listaFornecedor = await this._fornecedorServices.listarAllFornecedores();
    
    console.log(this.listaFornecedor);
  }

  efetuarCadastro()
  {
    this._router.navigate(['/cadastrar-fornecedor']);
  }

}
