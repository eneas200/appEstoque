import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { ProdutoService } from 'src/service/ProdutoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar-produtos',
  templateUrl: './filtrar-produtos.page.html',
  styleUrls: ['./filtrar-produtos.page.scss'],
})
export class FiltrarProdutosPage implements OnInit {
  public categoria: string = null;
  public produtosList: Produto[] = [];

  constructor(
    private _produtoService: ProdutoService,
    private _menu: MenuController,
    private _router: Router
    ) { 
  }


  ionViewWillEnter()
  {
    // bloquea menu left
    this._menu.swipeGesture(false);
    // buscar produtos no localStorage
    this.produtosList = this._produtoService.pegarProdutosLocal();
  }

  search()
  {
    let resposta: Produto[] = [];

    resposta = this._produtoService.pegarProdutosLocal();
    console.log(resposta);
    this._produtoService.format(resposta);

    this.produtosList = resposta.filter(produtos => produtos.categoria == this.categoria);
    
    console.log(this.produtosList);
  } 
  
  voltarProdutos()
  {
      this._router.navigate(['/ver-produto']);
      
  }

  ngOnInit() {
  }
  ngOnDestroy(){
      this.categoria = null;
  }
}
