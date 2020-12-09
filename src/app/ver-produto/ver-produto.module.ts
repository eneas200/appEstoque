import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProdutoPageRoutingModule } from './ver-produto-routing.module';

import { VerProdutoPage } from './ver-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProdutoPageRoutingModule
  ],
  declarations: [VerProdutoPage]
})
export class VerProdutoPageModule {}
