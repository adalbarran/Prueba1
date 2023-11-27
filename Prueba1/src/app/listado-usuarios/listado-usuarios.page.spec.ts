import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoUsuariosPage } from './listado-usuarios.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../state/api.service';
describe('ListadoUsuariosPage', () => {
  let component: ListadoUsuariosPage;
  let fixture: ComponentFixture<ListadoUsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoUsuariosPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
      providers: [ApiService],

    }).compileComponents();

    fixture = TestBed.createComponent(ListadoUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
