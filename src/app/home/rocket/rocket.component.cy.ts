import { RocketComponent } from './rocket.component';

describe('RocketComponent', () => {
  it('should render with an empty title', () => {
    cy.mount(RocketComponent);
    cy.get('.card').contains('app is running!');
  });

  it('should render with title passed in via Input', () => {
    const title = 'My Test App';
    cy.mount(RocketComponent, { inputs: { title } });
    cy.get('.card').contains(`${title} app is running!`);
  });
});
