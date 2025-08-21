import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Read } from './read';

describe('Read', () => {
  let component: Read;
  let fixture: ComponentFixture<Read>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Read]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Read);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
