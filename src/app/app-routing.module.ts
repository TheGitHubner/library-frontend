import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmprestimosComponent } from './views/emprestimos/emprestimos.component';
import { LivrosComponent } from './views/livros/livros.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { CriacaoUsuarioComponent } from './components/usuario/criacao-usuario/criacao-usuario.component';
import { CriacaoEmprestimoComponent } from './components/emprestimo/criacao-emprestimo/criacao-emprestimo.component';
import { CriacaoLivroComponent } from './components/livro/criacao-livro/criacao-livro.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { EditarLivroComponent } from './components/livro/editar-livro/editar-livro.component';
import { ListagemLivrosRecomendadosComponent } from './components/livro/listagem-livros-recomendados/listagem-livros-recomendados.component';
import { ListagemLivrosGoogleBooksComponent } from './components/livro/listagem-livros-google-books/listagem-livros-google-books.component';
import { EditarEmprestimoComponent } from './components/emprestimo/editar-emprestimo/editar-emprestimo.component';

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
    path: "emprestimos/editar/:id",
    component: EditarEmprestimoComponent
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
    path: "livros/editar/:id",
    component: EditarLivroComponent
  },
  {
    path: "livros/recomendacoes/:id/:nome",
    component: ListagemLivrosRecomendadosComponent
  },
  {
    path: "livros/google-books",
    component: ListagemLivrosGoogleBooksComponent
  },
  {
    path: "usuarios",
    component: UsuariosComponent
  },
  {
    path: "usuarios/criar",
    component: CriacaoUsuarioComponent
  },
  {
    path: "usuarios/editar/:id",
    component: EditarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
