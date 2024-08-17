import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoEmprestimoComponent } from './criacao-emprestimo.component';

describe('CriacaoEmprestimoComponent', () => {
  let component: CriacaoEmprestimoComponent;
  let fixture: ComponentFixture<CriacaoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
