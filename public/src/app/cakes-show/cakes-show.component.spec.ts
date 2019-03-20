import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesShowComponent } from './cakes-show.component';

describe('CakesShowComponent', () => {
  let component: CakesShowComponent;
  let fixture: ComponentFixture<CakesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
