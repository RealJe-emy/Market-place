import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenpageComponent } from './kitchenpage.component';

describe('KitchenpageComponent', () => {
  let component: KitchenpageComponent;
  let fixture: ComponentFixture<KitchenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
