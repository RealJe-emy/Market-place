import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryserviceComponent } from './laundryservice.component';

describe('LaundryserviceComponent', () => {
  let component: LaundryserviceComponent;
  let fixture: ComponentFixture<LaundryserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaundryserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaundryserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
