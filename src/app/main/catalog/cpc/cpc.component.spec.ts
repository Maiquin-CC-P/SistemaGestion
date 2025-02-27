import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcComponent } from './cpc.component';

describe('CpcComponent', () => {
  let component: CpcComponent;
  let fixture: ComponentFixture<CpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
