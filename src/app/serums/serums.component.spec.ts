import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerumsComponent } from './serums.component';

describe('SerumsComponent', () => {
  let component: SerumsComponent;
  let fixture: ComponentFixture<SerumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
