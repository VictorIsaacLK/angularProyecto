import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiParqueComponent } from './modi-parque.component';

describe('ModiParqueComponent', () => {
  let component: ModiParqueComponent;
  let fixture: ComponentFixture<ModiParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
