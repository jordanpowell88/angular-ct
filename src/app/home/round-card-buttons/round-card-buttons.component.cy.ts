import { mount } from 'cypress-angular-component-testing';
import { RoundCardButtonsComponent } from './round-card-buttons.component';

describe('RoundCardButtonsComponent', () => {
  beforeEach(async () => {
    await mount(RoundCardButtonsComponent);
  });

  it('should render the correct round card buttons', () => {
    cy.get('a[href="https://angular.io/guide/animations"]').should(
      'be.visible'
    );
    cy.get('a[href="https://cli.angular.io/"]').should('be.visible');
    cy.get('a[href="https://www.meetup.com/find/?keywords=angular"]').should(
      'be.visible'
    );
    cy.get('a[href="https://discord.gg/angular"]').should('be.visible');
  });
});
