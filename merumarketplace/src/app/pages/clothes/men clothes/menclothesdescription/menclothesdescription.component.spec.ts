import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenclothesdescriptionComponent } from './menclothesdescription.component';

describe('MenclothesdescriptionComponent', () => {
  let component: MenclothesdescriptionComponent;
  let fixture: ComponentFixture<MenclothesdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenclothesdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenclothesdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
