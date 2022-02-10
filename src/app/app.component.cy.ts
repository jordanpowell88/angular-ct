/// <reference types="cypress" />
import { RouterTestingModule } from '@angular/router/testing';
import { mount } from '../../projects/angular/src/public-api';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    mount(AppComponent, { imports: [AppModule, RouterTestingModule] });
  });

  it('should render title', () => {
    cy.get('.content span').contains('angular-ct app is running!');
  });

  it('should have a Learn Angular Button', () => {
    cy.get('.card-container span').contains('Learn Angular');
  });
});
