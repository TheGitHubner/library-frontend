import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../shared/shared.service';
import { ModalConfirmacaoComponent } from '../../shared/modal-confirmacao/modal-confirmacao.component';
import { Usuario } from '../../usuario/usuarios.model';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-listagem-livros-recomendados',
  templateUrl: './listagem-livros-recomendados.component.html',
  styleUrls: ['./listagem-livros-recomendados.component.css']
})
export class ListagemLivrosRecomendadosComponent implements OnInit {

  livros: Livro[] = []
  displayedColumns: string[] = ['id', 'titulo', 'autor', 'isbn', 'categoria', 'dataPublicacao'];
  usuarioId: string = this.route.snapshot.paramMap.get('id') || ''
  usuarioNome: string = this.route.snapshot.paramMap.get('nome') || ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livroService: LivroService

  ) { }

  ngOnInit(): void {
    this.__buscarLivrosRecomendados(this.usuarioId)
  }

  private __buscarLivrosRecomendados(usuarioId: string): void {
    this.livroService.buscarLivrosRecomendados(usuarioId).subscribe((livros: Livro[]) => {
      this.livros = livros
    })
  }

  public voltar(): void {
    this.router.navigate(['/usuarios'])
  }
}
