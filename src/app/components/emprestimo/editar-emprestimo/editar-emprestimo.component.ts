import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../emprestimo.model';
import { EmprestimoStatus } from '../status-emprestimo.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimoService } from '../emprestimo.service';
import { SharedService } from '../../shared/shared.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  emprestimo: Emprestimo = {
    usuario:{
      nome: "",
      email: "",
      dataCadastro: "",
      telefone: ""
    },
    livro: {
      titulo: "",
      autor: "",
      isbn: "",
      categoria: "",
      dataPublicacao: ""
    },
    status: EmprestimoStatus.ABERTO,
    dataDevolucao: '',
    dataEmprestimo: ''
  }

  situacaoSelecionada: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emprestimoService: EmprestimoService,
    private sharedService: SharedService
  ) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || ''
    this.emprestimoService.buscarEmprestimoPorId(id).subscribe((emprestimo) => {
      this.emprestimo = emprestimo
      this.situacaoSelecionada = emprestimo.status
    })
  }

  public editarEmprestimo(): void {
    if (this.__formularioInvalido())
      return

    this.emprestimo.status = this.situacaoSelecionada

    this.emprestimoService.editarEmprestimo(this.emprestimo).subscribe(() => {
      this.sharedService.showMessage('Emprestimo atualizado com sucesso!')
      this.router.navigate(['/emprestimos'])
    },
    (error: HttpErrorResponse) => {
      console.error("Erro ao atualizar empréstimo: ", error);
      this.sharedService.showMessage('Erro ao atualizar empréstimo: ' + error.error.message)
    })
  }

  private __formularioInvalido(): boolean {
    if (!this.emprestimo.status  ||
        !this.emprestimo.dataDevolucao || this.emprestimo.dataDevolucao.trim() == '') {
      this.sharedService.showMessage('Data de devolução e situação do empréstimo são obrigatórios.')
      return true
    }
    return false
  }

  public cancelar(): void {
    this.router.navigate(['/emprestimos'])
  }
}
