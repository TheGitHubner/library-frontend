import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios.model';
import { SharedService } from '../../shared/shared.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-criacao-usuario',
  templateUrl: './criacao-usuario.component.html',
  styleUrls: ['./criacao-usuario.component.css']
})
export class CriacaoUsuarioComponent implements OnInit {

  usuario: Usuario = {
    nome: "",
    email: "",
    dataCadastro: "",
    telefone: ""
  }

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  public criarUsuario(): void {
    if (this.__formularioInvalido())
      return

    this.usuarioService.criar(this.usuario).subscribe(() => {
      this.sharedService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigate(['/usuarios'])
    },
    (error: HttpErrorResponse) => {
      console.error("Erro ao cadastrar usuário: ", error);
      this.sharedService.showMessage('Erro ao cadastrar usuário: ' + error.error.message)
    })
  }

  private __formularioInvalido(): boolean {
    if (!this.usuario.nome || this.usuario.nome.trim() == '' ||
        !this.usuario.email || this.usuario.email.trim() == '' ||
        !this.usuario.dataCadastro || this.usuario.dataCadastro.trim() == '' ||
        !this.usuario.telefone || this.usuario.telefone.trim() == '') {
      this.sharedService.showMessage('Todos os campos são obrigatórios.')
      return true
    }
    return false
  }

  public cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

}
