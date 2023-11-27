import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoUsuarioPage } from './ingreso-usuario.page';
import { IonicModule } from '@ionic/angular';

xdescribe('InicioPage', () => {
  let component: IngresoUsuarioPage;
  let fixture: ComponentFixture<IngresoUsuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresoUsuarioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});