import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowMoreMinusComponent } from './button-show-more-minus.component';

describe('ButtonShowMoreMinusComponent', () => {
  let component: ButtonShowMoreMinusComponent;
  let fixture: ComponentFixture<ButtonShowMoreMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonShowMoreMinusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonShowMoreMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
