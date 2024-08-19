import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEmprestimoComponent } from './listagem-emprestimo.component';

describe('ListagemEmprestimoComponent', () => {
  let component: ListagemEmprestimoComponent;
  let fixture: ComponentFixture<ListagemEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
