import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBoxContainerComponent } from './cbox-container.component';

describe('CBoxContainerComponent', () => {
  let component: CBoxContainerComponent;
  let fixture: ComponentFixture<CBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBoxContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
