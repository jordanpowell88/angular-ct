# AngularCT

This project is used to do Component Testing with Angular and Cypress 9. 

## Getting Started

We first need to install the project dependencies:

```bash
npm install
```

Next let's add the following to our Cypress support file:

```javascript
// cypress/support/index.js
import '@cypress/angular/support';

```

The next thing is to configure the dev-server using the `angular-dev-server` package found in `[projects/angular-dev-server](projects/angular-dev-server/):

```typescript
import { devServer } from '@cypress/angular-dev-server'

module.exports = (on: Cypress.PluginEvents, config: PluginConfigOptions) => {

    on('dev-server:start', (config: Cypress.DevServerConfig) => {
        return devServer(config)
    })

    return config;
}
```

Finally we can start creating Angular Component Tests directly in our application using the `.cy.ts` file extension and the Cypress `mount()` command. Here is an example:

```typescript
// app.component.cy.ts (located in the same directory as app.component.ts)

import { mount } from '@cypress/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    it('mounts AppComponent', () => {
        mount(AppComponent)
        // your cypress code goes here: cy.get('...').contains('......'), etc
    })
})
```

Note that the `mount` command takes in an optional 2nd parameter which accepts your TestBed MetaData as well as any of your Component's `@Input()` properties. Here is an example:

```typescript
// my-other.component.ts

@Component({...})
export class MyOtherComponent {
    @Input() title: string;

    constructor(private readonly service: MyOtherService) {}

    doSomething(value): void {
        this.service.doSomething(value)
    }
}

```

```typescript
import { mount } from '@cypress/angular';
import { MyOtherComponent } from './my-other.component.ts';
import { MyOtherService } from 'services/my-other.service.ts';
import { MyOtherModule } from './my-other.module.ts';

describe('MyOtherComponent', () => {
    it('mounts and displays the passed in input title in the DOM', () => {
        mount(MyOtherComponent, {
            inputs: { title: 'My Test Title' },
            imports: [MyOtherModule],
            providers: [MyOtherService]
        });
        cy.get('h1').contains('My Test Title')
    })
})
```

### Running The Tests
The final thing to do is just run Cypress!

```bash
npx cypress open-ct
```
