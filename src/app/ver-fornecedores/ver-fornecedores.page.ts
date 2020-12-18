import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/models/Fornecedor';
import { FornecedorService } from 'src/service/FornecedorService';
import { GlobalService } from 'src/service/GlobalService';

@Component({
  selector: 'app-ver-fornecedores',
  templateUrl: './ver-fornecedores.page.html',
  styleUrls: ['./ver-fornecedores.page.scss'],
})

export class VerFornecedoresPage implements OnInit {
  public listaFornecedor: Fornecedor[] = new Array<Fornecedor>();
    
  constructor(
    private _globalService: GlobalService,
    private _fornecedorServices: FornecedorService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    
    this.buscarFornecedores();
  }

  async buscarFornecedores(){ // busca na api registros dos fornecedores cadastrados

    this.listaFornecedor = await this._fornecedorServices.listarAllFornecedores();
    
    console.log(this.listaFornecedor);
  }

  efetuarCadastro() // (OTIMIZAÇÃO)
  {
    this._globalService.mudaPagina('cadastrar-fornecedor');
  }

}
