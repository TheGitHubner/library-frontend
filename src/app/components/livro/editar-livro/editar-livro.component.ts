import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { SharedService } from '../../shared/shared.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  livro: Livro = {
    titulo: "",
    autor: "",
    isbn: "",
    categoria: "",
    dataPublicacao: ""
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livroService: LivroService,
    private sharedService: SharedService
  ) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || ''
    this.livroService.buscarLivroPorId(id).subscribe((livro) => {
      this.livro = livro
    })
  }

  public editarLivro(): void {
    if (this.__formularioInvalido())
      return

    this.livroService.editarLivro(this.livro).subscribe(() => {
      this.sharedService.showMessage('Livro atualizado com sucesso!')
      this.router.navigate(['/livros'])
    },
    (error: HttpErrorResponse) => {
      console.error("Erro ao atualizar livro: ", error);
      this.sharedService.showMessage('Erro ao atualizar livro: ' + error.error.message)
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
