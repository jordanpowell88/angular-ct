import 'zone.js';
import 'zone.js/testing';
import { Component, Type } from '@angular/core';
import {
  ComponentFixture,
  getTestBed,
  MetadataOverride,
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

  // see https://angular.io/guide/testing-components-scenarios#override-component-providers
  overrides?: MetadataOverride<Component>
}

function init<T extends object>(config: TestBedConfig<T>): TestBed {
  const testBed: TestBed = getTestBed();

  testBed.resetTestEnvironment();
  testBed.resetTestingModule();
  testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
  );

  const { inputs, ...testModuleMetaData } = config;

  testBed.configureTestingModule({
    ...testModuleMetaData,
    teardown: { destroyAfterEach: true }
  });

  return testBed;
}

export function mount<T extends object>(
  component: Type<T>,
  config: TestBedConfig<T> = {}
): ComponentFixture<T> {
  const testBed: TestBed = init(config);
  
  if (config?.overrides) {
    testBed.overrideComponent(component, config.overrides)
  }

  testBed.compileComponents();
  const fixture = testBed.createComponent(component);
  let componentInstance: T = fixture.componentInstance;


  if (config?.inputs) {
    componentInstance = Object.assign(componentInstance, config.inputs);
  }

  fixture.whenStable().then(() => {
    // This needs to be set to true so that change detection is automatically detected
    // Not sure if there would be a use case to not support autoDetectChanges(true) 
    fixture.autoDetectChanges(true);
  })

  return fixture;
}
