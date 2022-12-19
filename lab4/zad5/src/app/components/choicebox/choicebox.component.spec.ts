import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceboxComponent } from './choicebox.component';

describe('ChoiceboxComponent', () => {
  let component: ChoiceboxComponent;
  let fixture: ComponentFixture<ChoiceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
