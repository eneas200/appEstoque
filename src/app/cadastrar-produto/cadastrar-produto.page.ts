import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { GlobalService } from 'src/service/GlobalService';
import { ProdutoService } from 'src/service/ProdutoService';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})

export class CadastrarProdutoPage implements OnInit, OnDestroy {
  
  public listaProdutos: Produto[] = new Array<Produto>();
  public produto: Produto = new Produto();

  constructor(
    private _globalService: GlobalService,
    private _produtoService: ProdutoService
  ) { 
  }

  ionViewWillLeave(){
    this.produto = new Produto();
  }

  ngOnInit() { }

  ngOnDestroy(){
    // this.produto = null;
  }

  addCategoria() {
    // saida no console
    console.log(this.produto);

    // analisar atributos dos produtos
    this._produtoService.cadastrarProduto(this.produto).subscribe(produto => {
      
      // exibindo menssagem
      this._globalService.exibeMessage( produto.nome_produto );
     
      // redireciona para ver produto
      this._globalService.mudaPagina( 'ver-produto' );
    });

  }

}
