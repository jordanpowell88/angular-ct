import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOutputButtonComponent } from './test-output-button.component';

describe('TestOutputButtonComponent', () => {
  let component: TestOutputButtonComponent;
  let fixture: ComponentFixture<TestOutputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOutputButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOutputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
