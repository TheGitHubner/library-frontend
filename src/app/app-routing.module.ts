import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmprestimosComponent } from './views/emprestimos/emprestimos.component';
import { LivrosComponent } from './views/livros/livros.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { CriacaoUsuarioComponent } from './components/usuario/criacao-usuario/criacao-usuario.component';
import { CriacaoEmprestimoComponent } from './components/emprestimo/criacao-emprestimo/criacao-emprestimo.component';
import { CriacaoLivroComponent } from './components/livro/criacao-livro/criacao-livro.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "emprestimos",
    component: EmprestimosComponent
  },
  {
    path: "emprestimos/criar",
    component: CriacaoEmprestimoComponent
  },
  {
    path: "livros",
    component: LivrosComponent
  },
  {
    path: "livros/criar",
    component: CriacaoLivroComponent
  },
  {
    path: "usuarios",
    component: UsuariosComponent
  },
  {
    path: "usuarios/criar",
    component: CriacaoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
