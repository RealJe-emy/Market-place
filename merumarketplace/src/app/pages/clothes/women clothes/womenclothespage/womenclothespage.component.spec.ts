import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenclothespageComponent } from './womenclothespage.component';

describe('WomenclothespageComponent', () => {
  let component: WomenclothespageComponent;
  let fixture: ComponentFixture<WomenclothespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenclothespageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenclothespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
