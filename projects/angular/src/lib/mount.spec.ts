import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularComponent } from './angular.component';
import { AngularModule } from './angular.module';
import { mount, TestBedConfig } from './mount';

describe('mount', () => {
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(() => {
    fixture = mount(AngularComponent, { imports: [AngularModule] });
  });

  it('returns a fixture', () => {
    expect(fixture).toBeInstanceOf(ComponentFixture);
  });
  it('should create the component', () => {
    expect(fixture.componentInstance).toBeInstanceOf(AngularComponent);
  });
});
