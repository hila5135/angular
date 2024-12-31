import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormClassesComponent } from './reactive-form-classes.component';

describe('ReactiveFormClassesComponent', () => {
  let component: ReactiveFormClassesComponent;
  let fixture: ComponentFixture<ReactiveFormClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
