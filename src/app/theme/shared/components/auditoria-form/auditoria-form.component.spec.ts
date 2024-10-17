import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaFormComponent } from './auditoria-form.component';

describe('AuditoriaFormComponent', () => {
  let component: AuditoriaFormComponent;
  let fixture: ComponentFixture<AuditoriaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditoriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
