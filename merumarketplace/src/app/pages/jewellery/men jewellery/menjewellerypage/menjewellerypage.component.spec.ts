import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjewellerypageComponent } from './menjewellerypage.component';

describe('MenjewellerypageComponent', () => {
  let component: MenjewellerypageComponent;
  let fixture: ComponentFixture<MenjewellerypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenjewellerypageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenjewellerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
