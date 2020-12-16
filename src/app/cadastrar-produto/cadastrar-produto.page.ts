import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { ProdutoService } from 'src/service/ProdutoService';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})

export class CadastrarProdutoPage implements OnInit {
  
  public listaProdutos: Produto[] = new Array<Produto>();
  public produto: Produto = new Produto();;

  constructor(
    private _toastController: ToastController,
    private _produtoService: ProdutoService,
    private _router: Router
  ) { 
  }

  ionViewWillLeave(){
    this.produto = new Produto();
  }

  ngOnInit() { }

  ngOnDestroy(){ }

  async addCategoria() {
    // saida no console
    console.log(this.produto);

    // analisar atributos dos produtos
    await this._produtoService.cadastrarProduto(this.produto).subscribe(produto => {
      // exibindo menssagem
     this.adicionandoLista(produto.nome_produto);
     
      // redireciona para ver produto
      this._router.navigate(['/ver-produto']);
    });
  }
  // exibe menssagem
  async adicionandoLista(nome_produto) {
    const toast = await this._toastController.create({
      header: `Produtos`,
      message: `${nome_produto} adicionado!`,
      position: 'bottom',
      duration: 2500
    });
    toast.present();
  }

}
