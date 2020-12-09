import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerFornecedoresPageRoutingModule } from './ver-fornecedores-routing.module';

import { VerFornecedoresPage } from './ver-fornecedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerFornecedoresPageRoutingModule
  ],
  declarations: [VerFornecedoresPage]
})
export class VerFornecedoresPageModule {}
