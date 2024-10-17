import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDropDownComponent } from './week-drop-down.component';

describe('WeekDropDownComponent', () => {
  let component: WeekDropDownComponent;
  let fixture: ComponentFixture<WeekDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeekDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
