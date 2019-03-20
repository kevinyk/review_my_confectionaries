import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesReviewComponent } from './cakes-review.component';

describe('CakesReviewComponent', () => {
  let component: CakesReviewComponent;
  let fixture: ComponentFixture<CakesReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
