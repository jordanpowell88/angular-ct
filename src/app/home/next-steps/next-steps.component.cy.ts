import { mount } from '../../../../projects/angular/src/public-api';
import { NextStepsComponent } from './next-steps.component';

describe('NextStepsComponent', () => {
  beforeEach(() => {
    mount(NextStepsComponent);
  });

  it('should have a title of Next Steps', () => {
    cy.get('h2').contains('Next Steps');
  });

  it('should have an accurate paragraph description', () => {
    cy.get('p').contains('What do you want to do next with your app?');
  });

  it('should have 6 buttons', () => {
    cy.get('button').should('have.length', 6);
  });

  it('should have a terminal code block', () => {
    cy.get('pre').should('be.visible');
  });

  it('should display the correct terminal command when clicking the matching button', () => {
    cy.get('button').contains('New Component').click()
    cy.get('pre').should('contain.text', 'ng generate component xyz');
    cy.get('button').contains('Angular Material').click();
    cy.get('pre').should('contain.text', 'ng add @angular/material');
    cy.get('button').contains('Add PWA Support').click();
    cy.get('pre').should('contain.text', 'ng add @angular/pwa');
    cy.get('button').contains('Add Dependency').click();
    cy.get('pre').should('contain.text', 'ng add _____');
    cy.get('button').contains('Run and Watch Tests').click();
    cy.get('pre').should('contain.text', 'ng test');
    cy.get('button').contains('Build for Production').click();
    cy.get('pre').should('contain.text', 'ng build');
  })
});
