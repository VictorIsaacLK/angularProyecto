import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarParqueComponent } from './agregar-parque.component';

describe('AgregarParqueComponent', () => {
  let component: AgregarParqueComponent;
  let fixture: ComponentFixture<AgregarParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
