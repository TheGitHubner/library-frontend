import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../shared/shared.service';
import { ModalConfirmacaoComponent } from '../../shared/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-listagem-livro',
  templateUrl: './listagem-livro.component.html',
  styleUrls: ['./listagem-livro.component.css']
})
export class ListagemLivroComponent implements OnInit {

  livros: Livro[] = []
  displayedColumns: string[] = ['id', 'titulo', 'autor', 'isbn', 'categoria', 'dataPublicacao', 'acoes'];

  constructor(
    private router: Router,
    private livroService: LivroService,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }


  ngOnInit(): void {
    this.__buscarTodosLivros()
  }

  private __buscarTodosLivros(): void {
    this.livroService.buscarTodos().subscribe((livros: Livro[]) => {
      this.livros = livros
    })
  }

  public excluirLivro(livroId: string) {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent)

    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm){
        this.livroService.excluirLivro(livroId).subscribe(() => {
          this.sharedService.showMessage('Livro excluído com sucesso!')
          this.__buscarTodosLivros()
        },
        (error) => {
          console.error("Erro ao excluir livro: ", error);
          this.sharedService.showMessage('Não foi possível excluir esse livro')
        })
      }
    })
  }

}
