import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalspageComponent } from './rentalspage.component';

describe('RentalspageComponent', () => {
  let component: RentalspageComponent;
  let fixture: ComponentFixture<RentalspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
