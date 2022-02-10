import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { Type } from '@angular/core';
import {
  ComponentFixture,
  getTestBed,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

export interface TestBedConfig extends TestModuleMetadata {
  // this extends the normal angular TestBed config
  // we will most likely need to add additional props in here
}

function init(config: TestBedConfig): TestBed {
  const testBed: TestBed = getTestBed();

  testBed.resetTestEnvironment();
  testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    { teardown: { destroyAfterEach: true } }
  );

  testBed.configureTestingModule({
    // we might need to massage this object but will just spread it's props here for now
    ...config,
  });

  return testBed;
}

export function mount<T>(
  component: Type<T>,
  config: TestBedConfig = {}
): ComponentFixture<T> {
  const testBed: TestBed = init(config);

  testBed.compileComponents();
  const fixture = testBed.createComponent(component);

  // look into this to see if this runs and how many times its being called
  fixture.whenStable().then(() => fixture.detectChanges());

  return fixture;
}
