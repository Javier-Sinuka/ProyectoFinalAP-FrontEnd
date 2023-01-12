import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExperienciasComponent } from './lista-experiencias.component';

describe('ListaExperienciasComponent', () => {
  let component: ListaExperienciasComponent;
  let fixture: ComponentFixture<ListaExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaExperienciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
