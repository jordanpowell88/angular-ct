import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverridesComponent } from './overrides.component';
import { OverridesService } from './overrides.service';

describe('OverridesComponent', () => {
  let component: OverridesComponent;
  let fixture: ComponentFixture<OverridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverridesComponent ],
    }).overrideComponent(
      OverridesComponent, {
      set: { providers: [
        { provide: OverridesService }
      ]}
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
