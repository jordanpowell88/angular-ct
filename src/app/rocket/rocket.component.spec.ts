import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketComponent } from './rocket.component';

describe('RocketComponent', () => {
  let component: RocketComponent;
  let fixture: ComponentFixture<RocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
