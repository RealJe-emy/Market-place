import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshoespageComponent } from './menshoespage.component';

describe('MenshoespageComponent', () => {
  let component: MenshoespageComponent;
  let fixture: ComponentFixture<MenshoespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenshoespageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshoespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
