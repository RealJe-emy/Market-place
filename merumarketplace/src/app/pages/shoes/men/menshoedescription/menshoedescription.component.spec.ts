import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshoedescriptionComponent } from './menshoedescription.component';

describe('MenshoedescriptionComponent', () => {
  let component: MenshoedescriptionComponent;
  let fixture: ComponentFixture<MenshoedescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenshoedescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshoedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
