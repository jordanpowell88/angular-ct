import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularComponent } from './angular.component';
import { AngularModule } from './angular.module';
import { mount } from './mount';

describe('mount', () => {
  it('returns a fixture', () => {
    const fixture = mount(AngularComponent, { imports: [AngularModule]})
    expect(fixture).toBeInstanceOf(ComponentFixture);
  });
  it('should create the component', () => {
    const fixture = mount(AngularComponent, { imports: [AngularModule]})
    expect(fixture.componentInstance).toBeInstanceOf(AngularComponent);
  });

  it('adds inputs to componentInstance', () => {
    const fixture = mount(AngularComponent, { inputs: { title: 'My Title' }, imports: [AngularModule]})
    const component = fixture.componentInstance as AngularComponent;
    expect(component.title).toEqual('My Title');
  })
});
