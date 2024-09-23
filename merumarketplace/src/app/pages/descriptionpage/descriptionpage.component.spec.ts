import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionpageComponent } from './descriptionpage.component';

describe('DescriptionpageComponent', () => {
  let component: DescriptionpageComponent;
  let fixture: ComponentFixture<DescriptionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
