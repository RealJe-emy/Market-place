import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjewellerypageComponent } from './womenjewellerypage.component';

describe('WomenjewellerypageComponent', () => {
  let component: WomenjewellerypageComponent;
  let fixture: ComponentFixture<WomenjewellerypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenjewellerypageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenjewellerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
