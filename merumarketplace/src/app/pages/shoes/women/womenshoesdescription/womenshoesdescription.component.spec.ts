import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshoesdescriptionComponent } from './womenshoesdescription.component';

describe('WomenshoesdescriptionComponent', () => {
  let component: WomenshoesdescriptionComponent;
  let fixture: ComponentFixture<WomenshoesdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenshoesdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenshoesdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
