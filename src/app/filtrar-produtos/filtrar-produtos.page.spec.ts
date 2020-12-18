import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltrarProdutosPage } from './filtrar-produtos.page';

describe('FiltrarProdutosPage', () => {
  let component: FiltrarProdutosPage;
  let fixture: ComponentFixture<FiltrarProdutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarProdutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrarProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
