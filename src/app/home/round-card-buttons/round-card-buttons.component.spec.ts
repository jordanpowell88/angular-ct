import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCardButtonsComponent } from './round-card-buttons.component';

describe('RoundCardButtonsComponent', () => {
  let component: RoundCardButtonsComponent;
  let fixture: ComponentFixture<RoundCardButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [RoundCardButtonsComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundCardButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
