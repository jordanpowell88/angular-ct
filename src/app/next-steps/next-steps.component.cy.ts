import { mount } from '../../../projects/angular/src/public-api';
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
});
