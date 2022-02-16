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
  inputs?: { [P in keyof T]: T[P] }
}

function init<T extends object>(config: TestBedConfig<T>): TestBed {
  const testBed: TestBed = getTestBed();

  testBed.resetTestEnvironment();
  testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    { teardown: { destroyAfterEach: true } }
  );

  const { inputs, ...testModuleMetaData } = config;

  testBed.configureTestingModule({
    ...testModuleMetaData,
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

  if (config?.inputs) {
    Object.keys(config.inputs).map(input => {
      componentInstance = Object.assign(componentInstance, input)
    })
  }

  fixture.detectChanges();

  return fixture;
}
