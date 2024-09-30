import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiserviceComponent } from './wifiservice.component';

describe('WifiserviceComponent', () => {
  let component: WifiserviceComponent;
  let fixture: ComponentFixture<WifiserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WifiserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
