import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMaestraDropDownComponent } from './tabla-maestra-drop-down.component';

describe('TablaMaestraDropDownComponent', () => {
  let component: TablaMaestraDropDownComponent;
  let fixture: ComponentFixture<TablaMaestraDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaMaestraDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaMaestraDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
