import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshoesdescriptionpageComponent } from './menshoesdescriptionpage.component';

describe('MenshoesdescriptionpageComponent', () => {
  let component: MenshoesdescriptionpageComponent;
  let fixture: ComponentFixture<MenshoesdescriptionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenshoesdescriptionpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshoesdescriptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
