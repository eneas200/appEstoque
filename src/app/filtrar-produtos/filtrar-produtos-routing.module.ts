import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrarProdutosPage } from './filtrar-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrarProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrarProdutosPageRoutingModule {}
