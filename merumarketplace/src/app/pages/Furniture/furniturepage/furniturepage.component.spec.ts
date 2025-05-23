import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureComponent } from './furniturepage.component';

describe('FurnitureComponent', () => {
  let component: FurnitureComponent;
  let fixture: ComponentFixture<FurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
