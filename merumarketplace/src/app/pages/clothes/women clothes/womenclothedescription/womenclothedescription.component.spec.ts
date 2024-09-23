import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenclothedescriptionComponent } from './womenclothedescription.component';

describe('WomenclothedescriptionComponent', () => {
  let component: WomenclothedescriptionComponent;
  let fixture: ComponentFixture<WomenclothedescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenclothedescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenclothedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
