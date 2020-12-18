import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { GlobalService } from 'src/service/GlobalService';
import { ProdutoService } from 'src/service/ProdutoService';
@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.page.html',
  styleUrls: ['./ver-produto.page.scss'],
})
export class VerProdutoPage implements OnInit {
  
  public listaProdutos: Produto[] = new Array<Produto>();

  constructor(
    private _produtoService: ProdutoService,
    private _globalService: GlobalService
  ) { }

  ionViewWillEnter(){
    this.carregarProdutos();
  }  
  
  // busca os produtos que será exibido na página
  async carregarProdutos(){
    let produtosCarregados = await this._produtoService.listaProdutos();

    this._produtoService.format(produtosCarregados);
    
    this.listaProdutos = produtosCarregados;

    this._produtoService.guardaProdutosLocal(this.listaProdutos);
    
    console.log(this.listaProdutos);
    
    this._globalService.exibeMessage(`Produtos Carregados!`);
  }
  
  addProdutos() // (OTIMIZAÇÃO)
  { // redireciona para a pagina de cadastro de produtos
    this._globalService.mudaPagina('cadastrar-produto');
  }
  
  filtrarProdutos() // (OTIMIZAÇÃO)
  { // redireciona para pagina de filtros
    this._globalService.mudaPagina('filtrar-produtos');
  }

  ngOnInit() { }
}
