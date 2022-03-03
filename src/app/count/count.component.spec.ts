import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CountComponent } from './count.component';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservablesService } from './observables/observables.service';
import { OverridesComponent } from './overrides/overrides.component';
import { OverridesService } from './overrides/overrides.service';
import { TestOutputButtonComponent } from './test-output-button/test-output-button.component';

describe('CountComponent', () => {
  let component: CountComponent;
  let fixture: ComponentFixture<CountComponent>;
  const initialState = { count: { count: 0 }}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountComponent, NgrxCounterComponent, ObservablesComponent, OverridesComponent, TestOutputButtonComponent],
      providers: [provideMockStore({ initialState }), ObservablesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
