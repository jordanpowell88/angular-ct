import { RouterTestingModule } from '@angular/router/testing';
import { mount } from '../../projects/angular/src/public-api';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    mount(AppComponent, { imports: [AppModule, RouterTestingModule] });
  });

  it('can mount', () => {
    cy.get('footer').contains('Love Angular');
  })
});
