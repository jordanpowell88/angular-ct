import { mount } from '../../../../projects/angular/src/public-api';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  it('should render the default title of Welcome', () => {
    mount(ToolbarComponent);
    cy.get('.toolbar span').contains('Welcome');
  });

  it('should render a title with the title passed via prop', () => {
    const title = 'My Test Title';
    const fixture = mount(ToolbarComponent, { inputs: { title }});
    cy.get('.toolbar span').contains(title);
  });

  it('should have an image with an alt of Angular Logo', () => {
    mount(ToolbarComponent);
    cy.get('img[alt="Angular Logo"]').should('be.visible');
  });

  it('should have a twitter icon with a link to @angular', () => {
    mount(ToolbarComponent);
    cy.get('.toolbar a[href="https://twitter.com/angular"]').should('exist');
  });

  it('should have a youtube icon with a link to youtube.com/angular', () => {
    mount(ToolbarComponent);
    cy.get('.toolbar a[href="https://youtube.com/angular"]').should('exist');
  });
});
