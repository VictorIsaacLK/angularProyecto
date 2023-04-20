import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVisitanteComponent } from './agregar-visitante.component';

describe('AgregarVisitanteComponent', () => {
  let component: AgregarVisitanteComponent;
  let fixture: ComponentFixture<AgregarVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
