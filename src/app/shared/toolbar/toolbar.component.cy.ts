import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  it('should render the default title of Welcome', () => {
    cy.mount(ToolbarComponent, { imports: [RouterTestingModule]});
    cy.get('.toolbar span').contains('Welcome');
  });

  it('should render a title with the title passed via prop', () => {
    const title = 'My Test Title';
    cy.mount(ToolbarComponent, { inputs: { title }, imports: [RouterTestingModule]});
    cy.get('.toolbar span').contains(title);
  });

  it('should have an image with an alt of Angular Logo', () => {
    cy.mount(ToolbarComponent, { imports: [RouterTestingModule] });
    cy.get('img[alt="Angular Logo"]').should('be.visible');
  });

  it('should have a twitter icon with a link to @angular', () => {
    cy.mount(ToolbarComponent, { imports: [RouterTestingModule] });
    cy.get('.toolbar a[href="https://twitter.com/angular"]').should('exist');
  });

  it('should have a youtube icon with a link to youtube.com/angular', () => {
    cy.mount(ToolbarComponent, { imports: [RouterTestingModule] });
    cy.get('.toolbar a[href="https://youtube.com/angular"]').should('exist');
  });
});
