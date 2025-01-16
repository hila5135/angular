import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTreeComponent } from './courses-tree.component';

describe('CoursesTreeComponent', () => {
  let component: CoursesTreeComponent;
  let fixture: ComponentFixture<CoursesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
