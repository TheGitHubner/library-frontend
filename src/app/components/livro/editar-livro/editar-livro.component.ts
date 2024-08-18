import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  livro: Livro = {
    titulo: "",
    autor: "",
    isbn: "",
    categoria: "",
    dataPublicacao: ""
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livroService: LivroService,
    private sharedService: SharedService
  ) {  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || ''
    this.livroService.buscarLivroPorId(id).subscribe((livro) => {
      this.livro = livro
    })
  }

  public editarLivro(): void {
    this.livroService.editarLivro(this.livro).subscribe(() => {
      this.sharedService.showMessage('Livro atualizado com sucesso!')
      this.router.navigate(['/livros'])
    },
    (error) => {
      console.error("Erro ao atualizar livro: ", error);
      this.sharedService.showMessage('Erro ao atualizar livro, revise os dados e tente novamente.')
    })
  }

  public cancelar(): void {
    this.router.navigate(['/livros'])
  }



}
