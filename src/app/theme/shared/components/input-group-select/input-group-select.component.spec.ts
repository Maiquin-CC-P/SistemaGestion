import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupSelectComponent } from './input-group-select.component';

describe('InputGroupSelectComponent', () => {
  let component: InputGroupSelectComponent;
  let fixture: ComponentFixture<InputGroupSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroupSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
