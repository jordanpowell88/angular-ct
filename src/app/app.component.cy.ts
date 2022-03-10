import { RouterTestingModule } from '@angular/router/testing';
import { mount, MountResponse } from 'cypress-angular-component-testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let response: MountResponse<AppComponent>;

  beforeEach(() => {
    response = mount(AppComponent, {
      imports: [AppModule, RouterTestingModule]
    });
  });

  it('can mount', () => {
    cy.get('footer').contains('Love Angular');
  })

  it('does NOT show footer when show prop is false', () => {
    response.component.show = false;
    response.fixture.detectChanges();
    cy.get('footer').should('not.exist')
  })
});
