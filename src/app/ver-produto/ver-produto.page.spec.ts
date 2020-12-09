import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerProdutoPage } from './ver-produto.page';

describe('VerProdutoPage', () => {
  let component: VerProdutoPage;
  let fixture: ComponentFixture<VerProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProdutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
