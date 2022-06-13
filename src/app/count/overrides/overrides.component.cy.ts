import { of } from 'rxjs';
import { OverridesComponent } from './overrides.component';
import { OverridesService } from './overrides.service';

describe('OverridesComponent', () => {
  it('can mount', () => {
    cy.mount(OverridesComponent);
    cy.get('p').contains('overrides works ');
  });

  it('uses value from OverridesService', () => {
    cy.mount(OverridesComponent, {
      providers: [
        {
          provide: OverridesService,
          useValue: {
            tick$: of(42),
          } as OverridesService,
        },
      ],
    });

    cy.get('p').contains('overrides works 42');
  });

  it('increments every second', () => {
    cy.mount(OverridesComponent);
    cy.get('p').contains('overrides works ');
    cy.wait(1000);
    cy.get('p').contains('overrides works 0');
    cy.wait(1000);
    cy.get('p').contains('overrides works 1');
    cy.wait(4000);
    cy.get('p').contains('overrides works 5');
  });
});
