import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasserviceComponent } from './gasservice.component';

describe('GasserviceComponent', () => {
  let component: GasserviceComponent;
  let fixture: ComponentFixture<GasserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
