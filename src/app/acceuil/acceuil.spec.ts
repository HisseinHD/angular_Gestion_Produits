import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acceuil } from './acceuil';

describe('Acceuil', () => {
  let component: Acceuil;
  let fixture: ComponentFixture<Acceuil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acceuil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acceuil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
