import { mount } from 'cypress-angular-component-testing';
import { RocketComponent } from './rocket.component';

describe('RocketComponent', () => {
  it('should render with an empty title', async () => {
    await mount(RocketComponent);
    cy.get('.card').contains('app is running!');
  });

  it('should render with title passed in via Input', async () => {
    const title = 'My Test App';
    await mount(RocketComponent, { inputs: { title } });
    cy.get('.card').contains(`${title} app is running!`);
  });
});
