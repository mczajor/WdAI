import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTripCardComponent } from './cart-trip-card.component';

describe('CartTripCardComponent', () => {
  let component: CartTripCardComponent;
  let fixture: ComponentFixture<CartTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTripCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
