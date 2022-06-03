import { RouterTestingModule } from '@angular/router/testing';
import { TestBedConfig } from '../../projects/angular/src/lib/mount';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  const config: TestBedConfig<AppComponent> = {
    imports: [AppModule, RouterTestingModule]
  }

  it('can mount', () => {
    cy.mount(AppComponent, config)
    cy.get('footer').contains('Love Angular');
  })

  it('does NOT show footer when show prop is false', () => {
    cy.mount(AppComponent, config).then(response => {
      response.component.show = false;
      response.fixture.detectChanges();
      cy.get('footer').should('not.exist')
    })
  })
});
