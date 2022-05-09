import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareTipsComponent } from './skincare-tips.component';

describe('SkincareTipsComponent', () => {
  let component: SkincareTipsComponent;
  let fixture: ComponentFixture<SkincareTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkincareTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
