import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FornecedorService } from 'src/service/FornecedorService';

@Component({
  selector: 'app-ver-fornecedores',
  templateUrl: './ver-fornecedores.page.html',
  styleUrls: ['./ver-fornecedores.page.scss'],
})

export class VerFornecedoresPage implements OnInit {
  public listaFornecedor = [
    {
      'nome_empresa_fornecedor': 'empresa 1',
      'nome_intermediador': 'jose da silva',
      'email_fornecedor': 'empresa1@hotmail.com',
      'urlsite_fornecedor':'www.empresa.com.br'
    },
    {
      'nome_empresa_fornecedor': 'empresa 2',
      'nome_intermediador': 'Maria do Carmo',
      'email_fornecedor': 'empresa2@gmail.com',
      'urlsite_fornecedor':'http:/www.empresa.io'
    },{
      'nome_empresa_fornecedor': 'empresa 3',
      'nome_intermediador': 'carlos da silva oliveira',
      'email_fornecedor': 'empresa@outlook.com.br',
      'urlsite_fornecedor':'https:/www.empresa.com.br'
    }
  ]; 
  constructor(
    private _router: Router,
    private _fornecedorServices: FornecedorService
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.buscarFornecedores();
  }

  buscarFornecedores(){
    this._fornecedorServices.buscarFornecedor().subscribe(fornecedores => {
      if(fornecedores) {

        let valores = [];

        valores.push(fornecedores);

        for(let forn of valores) { // for 1
             
          for(let f of forn){ // for 2

            console.log(f.email_fornecedor);

          } // for 2

        } // for 1

      }

    });
  }

  efetuarCadastro()
  {
    this._router.navigate(['/cadastrar-fornecedor']);
  }

}
