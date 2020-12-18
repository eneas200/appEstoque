import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { ProdutoService } from 'src/service/ProdutoService';
import { GlobalService } from 'src/service/GlobalService';

@Component({
  selector: 'app-filtrar-produtos',
  templateUrl: './filtrar-produtos.page.html',
  styleUrls: ['./filtrar-produtos.page.scss'],
})
export class FiltrarProdutosPage implements OnInit, OnDestroy {
  public produto: Produto = new Produto();
  public produtosList: Produto[] = [];

  constructor(
    private _produtoService: ProdutoService,
    private _menu: MenuController,
    private _globalService: GlobalService
    ) { }

  ionViewWillEnter()
  {
    // bloquea menu left
    this._menu.swipeGesture(false);
    
    // buscar produtos no localStorage
    this.produtosList = this._produtoService.pegarProdutosLocal();
  }

  search()
  {
    this.produtosList = this._produtoService.filtrandoProdutos(this.produto);   

    console.log(this.produtosList);
  } 
  
  voltarProdutos() // (OTIMIZAÇÃO)
  {
    this._globalService.mudaPagina( 'ver-produto' );      
  }

  ngOnInit() 
  { }

  ngOnDestroy(){
      this.produto = null;
  }

}
