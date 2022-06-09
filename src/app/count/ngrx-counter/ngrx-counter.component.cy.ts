import { StoreModule } from "@ngrx/store";
import { CountStoreModule } from "../count-store/count-store.module";
import { NgrxCounterComponent } from "./ngrx-counter.component";

describe('NgRxCounterComponent', () => {
    beforeEach(() => {
        cy.mount(NgrxCounterComponent, {
            imports: [
                StoreModule.forRoot({}, {}),
                CountStoreModule
            ]
        })
    })
    it('can mount', () => {
        cy.get('h3').contains('NgRx Counter: 0');
    })

    it('can increment the count by dispatching action and selectors updates using MockStore.setState', () => {
        cy.get('h3').contains('NgRx Counter: 0');
        cy.get('button').contains('Increment +').click()
        cy.get('h3').contains('NgRx Counter: 1');
    })

    it('can decrement the count by dispatching action and selectors updates using MockStore.setState', () => {
        cy.get('h3').contains('NgRx Counter: 0')
        cy.get('button').contains('Decrement -').click();
        cy.get('h3').contains('NgRx Counter: -1')
    })
})