import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsdescriptionComponent } from './electronicsdescription.component';

describe('ElectronicsdescriptionComponent', () => {
  let component: ElectronicsdescriptionComponent;
  let fixture: ComponentFixture<ElectronicsdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicsdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
