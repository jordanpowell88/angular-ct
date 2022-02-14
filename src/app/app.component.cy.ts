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

  it('should have a Resources title', () => {
    cy.get('h2').contains('Resources');
  });

  it('should have a description before the list of buttons', () => {
    cy.get('p').contains('Here are some links to help you get started:');
  });

  it('should have a Learn Angular Button', () => {
    cy.get('.card-container span').contains('Learn Angular');
  });

  it('should have a CLI Documentation Button', () => {
    cy.get('.card-container span').contains('CLI Documentation');
  });

  it('should have an Angular Blog Button', () => {
    cy.get('.card-container span').contains('Angular Blog');
  });

  it('should have an Angular DevTools Button', () => {
    cy.get('.card-container span').contains('Angular DevTools');
  });

  it('should have a terminal with instructions for how to generate a component', () => {
    cy.get('.terminal pre').contains('ng generate component xyz');
  });

  it('should have a footer that says Love Angular', () => {
    cy.get('footer').contains('Love Angular');
  });
});
