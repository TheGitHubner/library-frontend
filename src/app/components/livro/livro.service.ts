import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    private http: HttpClient
  ) { }

  public criar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${API}/livros`, livro)
  }

  public buscarTodos(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${API}/livros/todos`)
  }

  public buscarLivroPorId(livroId: string): Observable<Livro> {
    return this.http.get<Livro>(`${API}/livros/${livroId}`)
  }

  public editarLivro(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${API}/livros/atualizar`, livro)
  }

  public excluirLivro(livroId: string): Observable<Livro> {
    return this.http.delete<Livro>(`${API}/livros/${livroId}`)
  }
}
