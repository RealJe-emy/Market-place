import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodspageComponent } from './foodspage.component';

describe('FoodspageComponent', () => {
  let component: FoodspageComponent;
  let fixture: ComponentFixture<FoodspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
