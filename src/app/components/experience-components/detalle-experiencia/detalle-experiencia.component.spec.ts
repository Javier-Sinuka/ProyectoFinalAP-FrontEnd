import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExperienciaComponent } from './detalle-experiencia.component';

describe('DetalleExperienciaComponent', () => {
  let component: DetalleExperienciaComponent;
  let fixture: ComponentFixture<DetalleExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
