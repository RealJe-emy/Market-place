import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersdescriptionComponent } from './photographersdescription.component';

describe('PhotographersdescriptionComponent', () => {
  let component: PhotographersdescriptionComponent;
  let fixture: ComponentFixture<PhotographersdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotographersdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographersdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
