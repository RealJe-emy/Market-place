import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkspageComponent } from './drinkspage.component';

describe('DrinkspageComponent', () => {
  let component: DrinkspageComponent;
  let fixture: ComponentFixture<DrinkspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
