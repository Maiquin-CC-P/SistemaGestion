import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemsComponent } from './main-items.component';

describe('MainItemsComponent', () => {
  let component: MainItemsComponent;
  let fixture: ComponentFixture<MainItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
