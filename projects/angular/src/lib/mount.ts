import { Type } from '@angular/core';
import {
  ComponentFixture, getTestBed, TestBed,
  TestModuleMetadata
} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

export interface TestBedConfig<T extends object> extends TestModuleMetadata {
  // this extends the normal angular TestBed config
  // and allows us to pass component Input() props as part of the config object
  inputs?: Partial<{ [P in keyof T]: T[P] }>
}

function init<T extends object>(component: Type<T>, config: TestBedConfig<T>): TestBed {
  const testBed: TestBed = getTestBed();
  
  testBed.resetTestEnvironment();
  testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
  );
    
  const { inputs, ...testModuleMetaData } = config;
  
  testModuleMetaData.declarations?.push(component);
  
  testBed.configureTestingModule({
    ...testModuleMetaData,
    teardown: { destroyAfterEach: true }
  });
    
  return testBed;
}

export type MountResponse<T extends object> = { fixture: ComponentFixture<T>, testBed: TestBed, component: T }

export async function mount<T extends object>(
  component: Type<T>,
  config: TestBedConfig<T> = {},
  autoDetectChanges = true
): Promise<MountResponse<T>> {
  const testBed: TestBed = init(component, config);

  const fixture = testBed.createComponent(component);
  await testBed.compileComponents();
  let componentInstance: T = fixture.componentInstance;


  if (config?.inputs) {
    // Cypress.log({ displayName: 'Component Inputs()', message: [config.inputs]})
    componentInstance = Object.assign(componentInstance, config.inputs);
  }

  await fixture.whenStable();

  fixture.autoDetectChanges(autoDetectChanges);

  return { fixture, testBed, component: componentInstance };
}
