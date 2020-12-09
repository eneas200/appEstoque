import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerFornecedoresPage } from './ver-fornecedores.page';

describe('VerFornecedoresPage', () => {
  let component: VerFornecedoresPage;
  let fixture: ComponentFixture<VerFornecedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFornecedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerFornecedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
