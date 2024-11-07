import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCvComponent } from './single-cv.component';

describe('SingleCvComponent', () => {
  let component: SingleCvComponent;
  let fixture: ComponentFixture<SingleCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
