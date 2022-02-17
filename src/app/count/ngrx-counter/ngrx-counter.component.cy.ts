import { provideMockStore } from "@ngrx/store/testing"
import { mount } from "../../../../projects/angular/src/public-api"
import { NgrxCounterComponent } from "./ngrx-counter.component"

describe('NgRxCounterComponent', () => {
    beforeEach(() => {
        mount(NgrxCounterComponent, { providers: [provideMockStore({ })]})
    })

    it('can mount', () => {
        cy.get('h3').contains('NgRx Counter: 0');
    })
})