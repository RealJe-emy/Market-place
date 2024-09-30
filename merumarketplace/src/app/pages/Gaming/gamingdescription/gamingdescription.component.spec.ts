import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingdescriptionComponent } from './gamingdescription.component';

describe('GamingdescriptionComponent', () => {
  let component: GamingdescriptionComponent;
  let fixture: ComponentFixture<GamingdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamingdescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
