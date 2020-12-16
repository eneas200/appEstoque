import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'painel-usuario',
    loadChildren: () => import('./painel-usuario/painel-usuario.module').then( m => m.PainelUsuarioPageModule)
  },
  {
    path: 'ver-fornecedores',
    loadChildren: () => import('./ver-fornecedores/ver-fornecedores.module').then( m => m.VerFornecedoresPageModule)
  },
  {
    path: 'cadastrar-funcionario',
    loadChildren: () => import('./cadastrar-funcionario/cadastrar-funcionario.module').then( m => m.CadastrarFuncionarioPageModule)
  },
  {
    path: 'cadastrar-produto',
    loadChildren: () => import('./cadastrar-produto/cadastrar-produto.module').then( m => m.CadastrarProdutoPageModule)
  },
  {
    path: 'ver-produto',
    loadChildren: () => import('./ver-produto/ver-produto.module').then( m => m.VerProdutoPageModule)
  },  {
    path: 'cadastrar-fornecedor',
    loadChildren: () => import('./cadastrar-fornecedor/cadastrar-fornecedor.module').then( m => m.CadastrarFornecedorPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
