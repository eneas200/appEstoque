import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarFornecedorPageRoutingModule } from './cadastrar-fornecedor-routing.module';

import { CadastrarFornecedorPage } from './cadastrar-fornecedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarFornecedorPageRoutingModule
  ],
  declarations: [CadastrarFornecedorPage]
})
export class CadastrarFornecedorPageModule {}
