import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NavController', ['navigateRoot']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: NavController, useValue: spy },
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    navCtrlSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
  });

  it('NO AUTENTICADO', () => {
    component.setAuthenticationStatus(false);

    component.ngOnInit();

    expect(navCtrlSpy.navigateRoot).toHaveBeenCalledWith('/');
  });

  it('AUTENTICADO', () => {
    component.setAuthenticationStatus(true);
    component.ngOnInit();
    expect(navCtrlSpy.navigateRoot).not.toHaveBeenCalled();
  });

  // Puedes agregar más pruebas según las características y lógica específica de tu AppComponent
});
