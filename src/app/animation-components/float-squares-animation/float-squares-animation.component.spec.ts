import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatSquaresAnimationComponent } from './float-squares-animation.component';

describe('FloatSquaresAnimationComponent', () => {
  let component: FloatSquaresAnimationComponent;
  let fixture: ComponentFixture<FloatSquaresAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatSquaresAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatSquaresAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
