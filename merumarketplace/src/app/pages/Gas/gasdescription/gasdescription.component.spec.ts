import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasdescriptionComponent } from './gasdescription.component';

describe('GasdescriptionComponent', () => {
  let component: GasdescriptionComponent;
  let fixture: ComponentFixture<GasdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
