import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'app-listagem-emprestimo',
  templateUrl: './listagem-emprestimo.component.html',
  styleUrls: ['./listagem-emprestimo.component.css']
})
export class ListagemEmprestimoComponent implements OnInit {

  emprestimos: Emprestimo[] = []
  displayedColumns: string[] = ['id', 'usuario', 'livro', 'dataEmprestimo', 'dataDevolucao', 'status', 'acoes'];

  constructor(
    private emprestimoService: EmprestimoService
  ) { }

  ngOnInit(): void {
    this.__buscarTodosEmprestimos()
  }

  private __buscarTodosEmprestimos(): void {
    this.emprestimoService.buscarTodos().subscribe((emprestimos: Emprestimo[]) => {
      this.emprestimos = emprestimos
    })
  }
}
