import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoveriComponent } from './codigoveri.component';

describe('CodigoveriComponent', () => {
  let component: CodigoveriComponent;
  let fixture: ComponentFixture<CodigoveriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoveriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoveriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
