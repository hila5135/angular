import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTeacherComponent } from './save-teacher.component';

describe('SaveTeacherComponent', () => {
  let component: SaveTeacherComponent;
  let fixture: ComponentFixture<SaveTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
