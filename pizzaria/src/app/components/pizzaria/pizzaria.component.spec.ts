import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzariaComponent } from './pizzaria.component';

describe('PizzariaComponent', () => {
  let component: PizzariaComponent;
  let fixture: ComponentFixture<PizzariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
