import { CardComponent } from './card.component';

describe('CardComponent', () => {
  it('should render a card with empty defaults', () => {
    cy.mount(CardComponent);
    cy.get('a.card').should('exist');
  });

  it('add Input props to Card Component', () => {
    cy.mount(CardComponent, {
      inputs: { href: 'https://docs.cypress.io', title: 'Card Title' },
    });
    cy.get('a.card[href="https://docs.cypress.io"]').should('exist');
    cy.get('span').contains('Card Title');
  });
});
