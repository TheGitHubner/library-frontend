import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* Material UI */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    CriacaoEmprestimoComponent
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
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
