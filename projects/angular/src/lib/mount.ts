import 'zone.js';
import 'zone.js/testing';
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

export interface TestBedConfig<T extends object> extends TestModuleMetadata {
  // this extends the normal angular TestBed config
  // and allows us to pass component Input() props as part of the config object
  // there maybe additional configuration options we will need as well
  // TODO this shouldn't be an array
  inputs?: { [key in keyof T]: any }[];
}

function init<T extends object>(config: TestBedConfig<T>): TestBed {
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

export function mount<T extends object>(
  component: Type<T>,
  config: TestBedConfig<T> = {}
): ComponentFixture<T> {
  const testBed: TestBed = init(config);

  testBed.compileComponents();
  const fixture = testBed.createComponent(component);
  let componentInstance: T = fixture.componentInstance;

  config.inputs?.map((input) => {
    componentInstance = Object.assign(componentInstance, input);
  });
  fixture.detectChanges();

  return fixture;
}
