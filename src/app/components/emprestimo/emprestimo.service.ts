import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emprestimo } from './emprestimo.model';
import { Observable } from 'rxjs';
import { API } from 'src/app/app.api';
import { EmprestimoDTO } from './emprestimo.dto';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(
    private http: HttpClient
  ) { }

  public criar(emprestimo: EmprestimoDTO): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(`${API}/emprestimos`, emprestimo)
  }

  public buscarTodos(): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${API}/emprestimos/todos`)
  }

  public buscarEmprestimoPorId(emprestimoId: string): Observable<Emprestimo> {
    return this.http.get<Emprestimo>(`${API}/emprestimos/${emprestimoId}`)
  }

  public editarEmprestimo(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.put<Emprestimo>(`${API}/emprestimos/atualizar`, emprestimo)
  }
}
