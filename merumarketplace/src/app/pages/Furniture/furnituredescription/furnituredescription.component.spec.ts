import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituredescriptionComponent } from './furnituredescription.component';

describe('FurnituredescriptionComponent', () => {
  let component: FurnituredescriptionComponent;
  let fixture: ComponentFixture<FurnituredescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnituredescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnituredescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
