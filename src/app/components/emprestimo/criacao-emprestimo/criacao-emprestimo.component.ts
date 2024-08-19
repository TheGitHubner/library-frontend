import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoStatus } from '../status-emprestimo.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimoService } from '../emprestimo.service';
import { SharedService } from '../../shared/shared.service';
import { EmprestimoDTO } from '../emprestimo.dto';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-criacao-emprestimo',
  templateUrl: './criacao-emprestimo.component.html',
  styleUrls: ['./criacao-emprestimo.component.css']
})
export class CriacaoEmprestimoComponent implements OnInit {
  emprestimo: EmprestimoDTO = {
    usuarioId: '',
    livroId: '',
    status: 'ABERTO',
    dataDevolucao: '',
    dataEmprestimo: ''
  }

  constructor(
    private router: Router,
    private emprestimoService: EmprestimoService,
    private sharedService: SharedService
  ) {  }

  ngOnInit(): void {
  }

  public criarEmprestimo(): void {
    if (this.__formularioInvalido())
      return

    this.emprestimoService.criar(this.emprestimo).subscribe(() => {
      this.sharedService.showMessage('Empréstimo cadastrado com sucesso!')
      this.router.navigate(['/emprestimos'])
    },
    (error: HttpErrorResponse) => {
      console.error("Erro ao cadastrar empréstimo: ", error);
      this.sharedService.showMessage('Erro ao cadastrar empréstimo: ' + error.error.message)
    })
  }

  private __formularioInvalido(): boolean {
    if (!this.emprestimo.status  || this.emprestimo.status.trim() == '' ||
        !this.emprestimo.dataDevolucao || this.emprestimo.dataDevolucao.trim() == '' ||
        !this.emprestimo.usuarioId || this.emprestimo.usuarioId.trim() == '' ||
        !this.emprestimo.livroId || this.emprestimo.livroId.trim() == '' ||
        !this.emprestimo.dataEmprestimo || this.emprestimo.dataEmprestimo.trim() == '') {
      this.sharedService.showMessage('Todos os campos são obrigatórios.')
      return true
    }
    return false
  }

  public cancelar(): void {
    this.router.navigate(['/emprestimos'])
  }

}
