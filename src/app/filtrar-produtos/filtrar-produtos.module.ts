import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrarProdutosPageRoutingModule } from './filtrar-produtos-routing.module';

import { FiltrarProdutosPage } from './filtrar-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrarProdutosPageRoutingModule
  ],
  declarations: [FiltrarProdutosPage]
})
export class FiltrarProdutosPageModule {}
