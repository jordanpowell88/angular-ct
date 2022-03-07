import { mount } from 'cypress-angular-component-testing';
import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  beforeEach(async () => {
    await mount(ResourcesComponent);
  });

  it('renders component with title of Resources', () => {
    cy.get('h2').contains('Resources');
  });

  it('renders component with a correct paragraph description', () => {
    cy.get('p').contains('Here are some links to help you get started:');
  });

  it('should have 4 app cards', () => {
    cy.get('app-card').should('have.length', 4);
  });
});
