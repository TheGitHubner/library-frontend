import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  public criar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API}/usuarios`, usuario)
  }

  public buscarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API}/usuarios/todos`)
  }

  public buscarUsuarioPorId(usuarioId: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${API}/usuarios/${usuarioId}`)
  }

  public editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${API}/usuarios/atualizar`, usuario)
  }

  public excluirUsuario(usuarioId: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${API}/usuarios/${usuarioId}`)
  }
}
