import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsdescriptionComponent } from './foodsdescription.component';

describe('FoodsdescriptionComponent', () => {
  let component: FoodsdescriptionComponent;
  let fixture: ComponentFixture<FoodsdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodsdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
