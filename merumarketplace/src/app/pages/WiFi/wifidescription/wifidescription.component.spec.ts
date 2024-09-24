import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifidescriptionComponent } from './wifidescription.component';

describe('WifidescriptionComponent', () => {
  let component: WifidescriptionComponent;
  let fixture: ComponentFixture<WifidescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WifidescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifidescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
