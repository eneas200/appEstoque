import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarFornecedorPage } from './cadastrar-fornecedor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarFornecedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarFornecedorPageRoutingModule {}
