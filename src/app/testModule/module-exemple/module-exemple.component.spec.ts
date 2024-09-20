import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleExempleComponent } from './module-exemple.component';

describe('ModuleExempleComponent', () => {
  let component: ModuleExempleComponent;
  let fixture: ComponentFixture<ModuleExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleExempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
