import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerspageComponent } from './photographerspage.component';

describe('PhotographerspageComponent', () => {
  let component: PhotographerspageComponent;
  let fixture: ComponentFixture<PhotographerspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotographerspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
