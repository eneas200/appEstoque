import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { ProdutoService } from 'src/service/ProdutoService';
@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.page.html',
  styleUrls: ['./ver-produto.page.scss'],
})
export class VerProdutoPage implements OnInit {
  
  public listaProdutos: Produto[] = new Array<Produto>();

  constructor(
    private _router: Router,
    private _produtoService: ProdutoService,
    private _toastController: ToastController
  ) { }

  ionViewWillEnter(){
    this.carregarProdutos();
  }  
  
  // busca os produtos que será exibido na página
  async carregarProdutos(){
    let produtosCarregados = await this._produtoService.listaProdutos();

    this.listaProdutos = produtosCarregados;

    this._produtoService.guardaProdutosLocal(this.listaProdutos);
    
    console.log(this.listaProdutos);
    
    this.messagemProdutos();
  }
  
  async messagemProdutos() { // exibe menssagem
    const toast = await this._toastController.create({
      message: `Produtos carregados`,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  addProdutos()
  {// redireciona para a pagina de cadastro de produtos
  	this._router.navigate(['/cadastrar-produto'])
  }
  
  filtrarProdutos()
  {// redireciona para pagina de filtros
      this._router.navigate(['filtrar-produtos']);
  }

  ngOnInit() { }
}
