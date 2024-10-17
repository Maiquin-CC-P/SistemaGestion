import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMilestonesFormComponent } from './project-milestones-form.component';

describe('ProjectMilestonesFormComponent', () => {
  let component: ProjectMilestonesFormComponent;
  let fixture: ComponentFixture<ProjectMilestonesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMilestonesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectMilestonesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
