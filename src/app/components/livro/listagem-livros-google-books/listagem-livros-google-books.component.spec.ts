import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLivrosGoogleBooksComponent } from './listagem-livros-google-books.component';

describe('ListagemLivrosGoogleBooksComponent', () => {
  let component: ListagemLivrosGoogleBooksComponent;
  let fixture: ComponentFixture<ListagemLivrosGoogleBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemLivrosGoogleBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemLivrosGoogleBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
