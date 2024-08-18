import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLivrosRecomendadosComponent } from './listagem-livros-recomendados.component';

describe('ListagemLivrosRecomendadosComponent', () => {
  let component: ListagemLivrosRecomendadosComponent;
  let fixture: ComponentFixture<ListagemLivrosRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemLivrosRecomendadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemLivrosRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
