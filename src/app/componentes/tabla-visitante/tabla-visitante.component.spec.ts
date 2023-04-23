import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVisitanteComponent } from './tabla-visitante.component';

describe('TablaVisitanteComponent', () => {
  let component: TablaVisitanteComponent;
  let fixture: ComponentFixture<TablaVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
