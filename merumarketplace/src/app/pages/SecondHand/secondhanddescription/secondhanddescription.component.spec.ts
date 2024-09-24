import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhanddescriptionComponent } from './secondhanddescription.component';

describe('SecondhanddescriptionComponent', () => {
  let component: SecondhanddescriptionComponent;
  let fixture: ComponentFixture<SecondhanddescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondhanddescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondhanddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
