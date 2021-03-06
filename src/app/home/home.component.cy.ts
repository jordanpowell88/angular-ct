import { HomeComponent } from "./home.component"
import { HomeModule } from "./home.module"

describe('HomeComponent', () => {
    beforeEach(() => {
        cy.mount(HomeComponent, {
          imports: [HomeModule]
        })
    })

    it('should render the child components', () => {
        cy.get('app-rocket').should('be.visible');
        cy.get('app-resources').should('be.visible');
        cy.get('app-next-steps').should('be.visible');
        cy.get('app-round-card-buttons').should('be.visible');
        cy.get('app-svg').should('be.visible');
      });
    
      it('should have a Resources title', () => {
        cy.get('h2').contains('Resources');
      });
    
      it('should have a description before the list of buttons', () => {
        cy.get('p').contains('Here are some links to help you get started:');
      });
    
      it('should have a Learn Angular Button', () => {
        cy.get('.card-container span').contains('Learn Angular');
      });
    
      it('should have a CLI Documentation Button', () => {
        cy.get('.card-container span').contains('CLI Documentation');
      });
    
      it('should have an Angular Blog Button', () => {
        cy.get('.card-container span').contains('Angular Blog');
      });
    
      it('should have an Angular DevTools Button', () => {
        cy.get('.card-container span').contains('Angular DevTools');
      });
    
      it('should have a terminal with instructions for how to generate a component', () => {
        cy.get('.terminal pre').contains('ng generate component xyz');
      });
})