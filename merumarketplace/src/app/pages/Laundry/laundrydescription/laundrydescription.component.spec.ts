import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundrydescriptionComponent } from './laundrydescription.component';

describe('LaundrydescriptionComponent', () => {
  let component: LaundrydescriptionComponent;
  let fixture: ComponentFixture<LaundrydescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaundrydescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaundrydescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
