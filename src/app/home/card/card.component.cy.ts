import { mount } from 'cypress-angular-component-testing';
import { CardComponent } from './card.component';

describe('CardComponent', async () => {
  it('should render a card with empty defaults', async () => {
    await mount(CardComponent);
    cy.get('a.card').should('exist');
  });

  it('add Input props to Card Component', async () => {
    await mount(CardComponent, {
      inputs: { href: 'https://docs.cypress.io', title: 'Card Title' },
    });
    cy.get('a.card[href="https://docs.cypress.io"]').should('exist');
    cy.get('span').contains('Card Title');
  });
});
