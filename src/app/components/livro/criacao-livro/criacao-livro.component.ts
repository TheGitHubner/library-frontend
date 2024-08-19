import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { SharedService } from '../../shared/shared.service';
import { Livro } from '../livro.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-criacao-livro',
  templateUrl: './criacao-livro.component.html',
  styleUrls: ['./criacao-livro.component.css']
})
export class CriacaoLivroComponent implements OnInit {

  livro: Livro = {
    titulo: "",
    autor: "",
    isbn: "",
    categoria: "",
    dataPublicacao: ""
  }

  constructor(
    private router: Router,
    private livroService: LivroService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  public criarLivro(): void {
    if (this.__formularioInvalido())
      return

    this.livroService.criar(this.livro).subscribe(() => {
      this.sharedService.showMessage('Livro cadastrado com sucesso!')
      this.router.navigate(['/livros'])
    },
    (error: HttpErrorResponse) => {
      console.error("Erro ao cadastrar livro: ", error);
      this.sharedService.showMessage('Erro ao cadastrar livro: ' + error.error.message)
    })
  }

  private __formularioInvalido(): boolean {
    if (!this.livro.titulo || this.livro.titulo.trim() == '' ||
        !this.livro.autor || this.livro.autor.trim() == '' ||
        !this.livro.isbn || this.livro.isbn.trim() == '' ||
        !this.livro.categoria || this.livro.categoria.trim() == '' ||
        !this.livro.dataPublicacao || this.livro.dataPublicacao.trim() == '') {
      this.sharedService.showMessage('Todos os campos são obrigatórios.')
      return true
    }
    return false
  }

  public cancelar(): void {
    this.router.navigate(['/livros'])
  }
}
