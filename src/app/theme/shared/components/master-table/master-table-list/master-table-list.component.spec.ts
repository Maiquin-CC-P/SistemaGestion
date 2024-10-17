import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTableListComponent } from './master-table-list.component';

describe('MasterTableListComponent', () => {
  let component: MasterTableListComponent;
  let fixture: ComponentFixture<MasterTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterTableListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
