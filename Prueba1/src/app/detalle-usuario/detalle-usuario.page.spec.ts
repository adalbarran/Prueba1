import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleUsuarioPage } from './detalle-usuario.page';
import { IonicModule } from '@ionic/angular';

describe('DetalleUsuarioPage', () => {
  let component: DetalleUsuarioPage;
  let fixture: ComponentFixture<DetalleUsuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleUsuarioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
