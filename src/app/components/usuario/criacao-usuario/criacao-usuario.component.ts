import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios.model';

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
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  public criarUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios'])
    })
  }

  public cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

}
