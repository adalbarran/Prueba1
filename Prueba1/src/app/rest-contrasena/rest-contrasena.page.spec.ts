import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestContrasenaPage } from './rest-contrasena.page';
import { IonicModule } from '@ionic/angular';

describe('RestContrasenaPage', () => {
  let component: RestContrasenaPage;
  let fixture: ComponentFixture<RestContrasenaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestContrasenaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
