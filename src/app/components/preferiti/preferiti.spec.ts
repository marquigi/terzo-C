import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preferiti } from './preferiti';

describe('Preferiti', () => {
  let component: Preferiti;
  let fixture: ComponentFixture<Preferiti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preferiti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preferiti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
