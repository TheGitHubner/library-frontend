import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoUsuarioComponent } from './criacao-usuario.component';

describe('CriacaoUsuarioComponent', () => {
  let component: CriacaoUsuarioComponent;
  let fixture: ComponentFixture<CriacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
