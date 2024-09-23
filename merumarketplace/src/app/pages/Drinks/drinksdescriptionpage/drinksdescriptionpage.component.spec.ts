import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksdescriptionpageComponent } from './drinksdescriptionpage.component';

describe('DrinksdescriptionpageComponent', () => {
  let component: DrinksdescriptionpageComponent;
  let fixture: ComponentFixture<DrinksdescriptionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinksdescriptionpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksdescriptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
