import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Produto } from 'src/models/Produto';
import { ProdutoService } from 'src/service/ProdutoService';
@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.page.html',
  styleUrls: ['./ver-produto.page.scss'],
})
export class VerProdutoPage implements OnInit {
  
  public listaProdutos: Produto[] = new Array<Produto>();

  public produto: Produto = new Produto();

  constructor(
    private _router: Router,
    private _produtoService: ProdutoService,
    private _toastController: ToastController
  ) { 
  }

  ionViewWillEnter(){
    this.retornaProdutos();

  }

  retornaProdutos() {
    console.log("metodo que rece um novo produto");
    this._produtoService.buscarProduto().subscribe(produto => {
      console.log(produto);
      
      this.messagemProdutos();


    });
  }
  
  // exibe menssagem
  async messagemProdutos() {
    const toast = await this._toastController.create({
      message: `Produto carregados`,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
  }
  
  // redireciona para a pagina de cadastro
  addProdutos()
  {
  	this._router.navigate(['/cadastrar-produto'])
  }

}
