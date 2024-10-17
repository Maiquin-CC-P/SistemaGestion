import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListV2Component } from './table-list-v2.component';

describe('TableListV2Component', () => {
  let component: TableListV2Component;
  let fixture: ComponentFixture<TableListV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
