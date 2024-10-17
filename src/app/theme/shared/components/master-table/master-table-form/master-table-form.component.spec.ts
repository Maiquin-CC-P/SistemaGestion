import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTableFormComponent } from './master-table-form.component';

describe('MasterTableFormComponent', () => {
  let component: MasterTableFormComponent;
  let fixture: ComponentFixture<MasterTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
