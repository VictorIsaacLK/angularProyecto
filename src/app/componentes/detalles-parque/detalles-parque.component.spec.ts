import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesParqueComponent } from './detalles-parque.component';

describe('DetallesParqueComponent', () => {
  let component: DetallesParqueComponent;
  let fixture: ComponentFixture<DetallesParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
