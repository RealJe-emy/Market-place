import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchendescriptionComponent } from './kitchendescription.component';

describe('KitchendescriptionComponent', () => {
  let component: KitchendescriptionComponent;
  let fixture: ComponentFixture<KitchendescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchendescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchendescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
