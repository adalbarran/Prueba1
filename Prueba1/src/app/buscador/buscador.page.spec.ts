import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorPage } from './buscador.page';
import { IonicModule } from '@ionic/angular';

describe('BuscadorPage', () => {
  let component: BuscadorPage;
  let fixture: ComponentFixture<BuscadorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscadorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();


    fixture = TestBed.createComponent(BuscadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
