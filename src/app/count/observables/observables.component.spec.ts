import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesComponent } from './observables.component';
import { ObservablesService } from './observables.service';

describe('ObservablesComponent', () => {
  let component: ObservablesComponent;
  let fixture: ComponentFixture<ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ObservablesComponent],
    providers: [ObservablesService],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
