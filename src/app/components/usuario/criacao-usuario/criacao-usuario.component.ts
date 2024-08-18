import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios.model';
import { SharedService } from '../../shared/shared.service';

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
    this.usuarioService.criar(this.usuario).subscribe(() => {
      this.sharedService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigate(['/usuarios'])
    },
    (error) => {
      console.error("Erro ao cadastrar usuário: ", error);
      this.sharedService.showMessage('Erro ao cadastrar usuário, revise os dados e tente novamente.')
    })
  }

  public cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

}
