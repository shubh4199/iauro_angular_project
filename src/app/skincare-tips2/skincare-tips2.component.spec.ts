import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareTips2Component } from './skincare-tips2.component';

describe('SkincareTips2Component', () => {
  let component: SkincareTips2Component;
  let fixture: ComponentFixture<SkincareTips2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkincareTips2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareTips2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
