import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMilestonesListComponent } from './project-milestones-list.component';

describe('ProjectMilestonesListComponent', () => {
  let component: ProjectMilestonesListComponent;
  let fixture: ComponentFixture<ProjectMilestonesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMilestonesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectMilestonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
