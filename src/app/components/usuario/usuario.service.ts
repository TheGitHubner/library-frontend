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

  public create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API}/usuarios`, usuario)

    // http://localhost:8080/usuarios
  }
}
