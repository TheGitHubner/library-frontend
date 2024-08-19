import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { SharedService } from '../../shared/shared.service';
import { Usuario } from '../usuarios.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    nome: "",
    email: "",
    dataCadastro: "",
    telefone: ""
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private sharedService: SharedService
  ) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || ''
    this.usuarioService.buscarUsuarioPorId(id).subscribe((usuario) => {
      this.usuario = usuario
    })
  }

  public editarUsuario(): void {
    if(this.__formularioInvalido())
      return

    this.usuarioService.editarUsuario(this.usuario).subscribe(() => {
      this.sharedService.showMessage('Usuário atualizado com sucesso!')
      this.router.navigate(['/usuarios'])
    },
    (error: HttpErrorResponse) => {
      console.error("Erro ao atualizar usuário: ", error);
      this.sharedService.showMessage('Erro ao atualizar usuário: ' + error.error.message)
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
