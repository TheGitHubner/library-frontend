import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.css']
})
export class EmprestimosComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateToCriacaoEmprestimo(){
    this.router.navigate(['emprestimos/criar'])
  }
}
