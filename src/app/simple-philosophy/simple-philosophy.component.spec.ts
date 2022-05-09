import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePhilosophyComponent } from './simple-philosophy.component';

describe('SimplePhilosophyComponent', () => {
  let component: SimplePhilosophyComponent;
  let fixture: ComponentFixture<SimplePhilosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePhilosophyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
