import { mount } from '../../../../projects/angular/src/public-api';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(() => {
    mount(FooterComponent);
  });

  it('should render with Love Angular?', () => {
    cy.get('footer').contains('Love Angular?');
  });

  it('should have a link to github', () => {
    cy.get('footer')
      .find('a[href="https://github.com/angular/angular"]')
      .should('exist');
  });
});
