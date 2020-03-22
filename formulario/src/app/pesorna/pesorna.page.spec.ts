import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesornaPage } from './pesorna.page';

describe('PesornaPage', () => {
  let component: PesornaPage;
  let fixture: ComponentFixture<PesornaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesornaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesornaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
