import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* Material UI */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';


import { HeaderComponent } from './components/template/header/header.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { EmprestimosComponent } from './views/emprestimos/emprestimos.component';
import { LivrosComponent } from './views/livros/livros.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { CriacaoUsuarioComponent } from './components/usuario/criacao-usuario/criacao-usuario.component';
import { CriacaoLivroComponent } from './components/livro/criacao-livro/criacao-livro.component';
import { CriacaoEmprestimoComponent } from './components/emprestimo/criacao-emprestimo/criacao-emprestimo.component';
import { ListagemUsuarioComponent } from './components/usuario/listagem-usuario/listagem-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { ListagemLivroComponent } from './components/livro/listagem-livro/listagem-livro.component';
import { EditarLivroComponent } from './components/livro/editar-livro/editar-livro.component';
import { ListagemLivrosRecomendadosComponent } from './components/livro/listagem-livros-recomendados/listagem-livros-recomendados.component';
import { ListagemLivrosGoogleBooksComponent } from './components/livro/listagem-livros-google-books/listagem-livros-google-books.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    EmprestimosComponent,
    LivrosComponent,
    UsuariosComponent,
    CriacaoUsuarioComponent,
    CriacaoLivroComponent,
    CriacaoEmprestimoComponent,
    ListagemUsuarioComponent,
    EditarUsuarioComponent,
    ListagemLivroComponent,
    EditarLivroComponent,
    ListagemLivrosRecomendadosComponent,
    ListagemLivrosGoogleBooksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
