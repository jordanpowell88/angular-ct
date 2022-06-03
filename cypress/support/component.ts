import '../../projects/angular/src/support/index';

import { mount } from '../../projects/angular/src/lib/mount'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)
