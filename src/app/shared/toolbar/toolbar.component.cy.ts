import { RouterTestingModule } from '@angular/router/testing';
import { mount } from 'cypress-angular-component-testing';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  it('should render the default title of Welcome', () => {
    mount(ToolbarComponent, { imports: [RouterTestingModule]});
    cy.get('.toolbar span').contains('Welcome');
  });

  it('should render a title with the title passed via prop', () => {
    const title = 'My Test Title';
    mount(ToolbarComponent, { inputs: { title }, imports: [RouterTestingModule]});
    cy.get('.toolbar span').contains(title);
  });

  it('should have an image with an alt of Angular Logo', () => {
    mount(ToolbarComponent, { imports: [RouterTestingModule] });
    cy.get('img[alt="Angular Logo"]').should('be.visible');
  });

  it('should have a twitter icon with a link to @angular', () => {
    mount(ToolbarComponent, { imports: [RouterTestingModule] });
    cy.get('.toolbar a[href="https://twitter.com/angular"]').should('exist');
  });

  it('should have a youtube icon with a link to youtube.com/angular', () => {
    mount(ToolbarComponent, { imports: [RouterTestingModule] });
    cy.get('.toolbar a[href="https://youtube.com/angular"]').should('exist');
  });
});
