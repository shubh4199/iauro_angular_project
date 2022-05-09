import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisturisersComponent } from './moisturisers.component';

describe('MoisturisersComponent', () => {
  let component: MoisturisersComponent;
  let fixture: ComponentFixture<MoisturisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoisturisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoisturisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
