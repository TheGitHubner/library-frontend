import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoLivroComponent } from './criacao-livro.component';

describe('CriacaoLivroComponent', () => {
  let component: CriacaoLivroComponent;
  let fixture: ComponentFixture<CriacaoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
