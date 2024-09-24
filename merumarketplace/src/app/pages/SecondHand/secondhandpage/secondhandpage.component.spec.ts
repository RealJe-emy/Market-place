import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhandpageComponent } from './secondhandpage.component';

describe('SecondhandpageComponent', () => {
  let component: SecondhandpageComponent;
  let fixture: ComponentFixture<SecondhandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondhandpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondhandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
