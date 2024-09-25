import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingpageComponent } from './gamingpage.component';

describe('GamingpageComponent', () => {
  let component: GamingpageComponent;
  let fixture: ComponentFixture<GamingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamingpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
