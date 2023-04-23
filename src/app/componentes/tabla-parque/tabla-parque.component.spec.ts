import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaParqueComponent } from './tabla-parque.component';

describe('TablaParqueComponent', () => {
  let component: TablaParqueComponent;
  let fixture: ComponentFixture<TablaParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
