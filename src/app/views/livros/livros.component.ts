import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateToCriacaoLivro(){
    this.router.navigate(['livros/criar'])
  }
}
