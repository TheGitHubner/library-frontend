import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { SharedService } from '../../shared/shared.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-livros-google-books',
  templateUrl: './listagem-livros-google-books.component.html',
  styleUrls: ['./listagem-livros-google-books.component.css']
})
export class ListagemLivrosGoogleBooksComponent implements OnInit {

  livros: Livro[] = []
  displayedColumns: string[] = ['titulo', 'autor', 'isbn', 'categoria', 'dataPublicacao', 'acoes'];
  nomeLivroQuery: string = "";

  constructor(
    private router:Router,
    private livroService: LivroService,
    private sharedService: SharedService
  ) { }


  ngOnInit(): void {
    this.buscarLivrosGoogleBooks()
  }

  public buscarLivrosGoogleBooks(): void {
    this.livroService.buscarLivrosGoogleBooks(this.nomeLivroQuery).subscribe((livros: Livro[]) => {
      this.livros = livros
    })
  }

  public criarLivro(livro: Livro): void {
    this.livroService.criar(livro).subscribe(() => {
      this.sharedService.showMessage('Livro cadastrado com sucesso!')
    },
    (error) => {
      console.error("Erro ao cadastrar livro: ", error);
      this.sharedService.showMessage('Não foi possível cadastrar o livro.')
    })
  }

  public voltar(): void {
    this.router.navigate(['/livros'])
    }

}
