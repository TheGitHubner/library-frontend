import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLivroComponent } from './listagem-livro.component';

describe('ListagemLivroComponent', () => {
  let component: ListagemLivroComponent;
  let fixture: ComponentFixture<ListagemLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
