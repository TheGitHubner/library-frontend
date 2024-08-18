import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacaoComponent } from '../../shared/modal-confirmacao/modal-confirmacao.component';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Usuario[] = []
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'dataCadastro', 'acoes'];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.__buscarTodosUsuarios()
  }

  private __buscarTodosUsuarios(): void {
    this.usuarioService.buscarTodos().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios
    })
  }

  public excluirUsuario(usuarioId: string) {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent)

    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm){
        this.usuarioService.excluirUsuario(usuarioId).subscribe(() => {
          this.sharedService.showMessage('Usuário excluído com sucesso!')
          this.__buscarTodosUsuarios()
        },
        (error) => {
          console.error("Erro ao excluir usuário: ", error);
          this.sharedService.showMessage('Não foi possível excluir esse usuário')
        })
      }
    })
  }
}
