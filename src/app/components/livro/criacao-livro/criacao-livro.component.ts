import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { SharedService } from '../../shared/shared.service';
import { Livro } from '../livro.model';

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
    this.livroService.criar(this.livro).subscribe(() => {
      this.sharedService.showMessage('Livro cadastrado com sucesso!')
      this.router.navigate(['/livros'])
    },
    (error) => {
      console.error("Erro ao cadastrar livro: ", error);
      this.sharedService.showMessage('Erro ao cadastrar livro, revise os dados e tente novamente.')
    })
  }

  public cancelar(): void {
    this.router.navigate(['/livros'])
  }
}
