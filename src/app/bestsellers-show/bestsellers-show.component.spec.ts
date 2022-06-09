import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersShowComponent } from './bestsellers-show.component';

describe('BestsellersShowComponent', () => {
  let component: BestsellersShowComponent;
  let fixture: ComponentFixture<BestsellersShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellersShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
