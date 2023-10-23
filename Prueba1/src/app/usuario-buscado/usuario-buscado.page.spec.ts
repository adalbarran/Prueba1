import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioBuscadoPage } from './usuario-buscado.page';

describe('UsuarioBuscadoPage', () => {
  let component: UsuarioBuscadoPage;
  let fixture: ComponentFixture<UsuarioBuscadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioBuscadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
