import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksdescriptionComponent } from './drinksdescription.component';

describe('DrinksdescriptionComponent', () => {
  let component: DrinksdescriptionComponent;
  let fixture: ComponentFixture<DrinksdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinksdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
