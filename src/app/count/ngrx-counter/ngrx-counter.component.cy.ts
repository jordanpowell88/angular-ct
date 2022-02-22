import 'zone.js';
import 'zone.js/testing';
import { provideMockStore } from "@ngrx/store/testing"
import { mount } from "../../../../projects/angular/src/public-api"
import { NgrxCounterComponent } from "./ngrx-counter.component"
import { initialState } from '../count-store/count.reducer';

describe('NgRxCounterComponent', () => {
    beforeEach(() => {
        mount(NgrxCounterComponent, {
            overrides: {
                set: { 
                    providers: [provideMockStore()]
                }
            }
        })
    })
    it('can mount', () => {
        cy.get('h3').contains('NgRx Counter: 0');
    })

    it('can increment the count by dispatching action and selectors updates', () => {
        cy.get('h3').contains('NgRx Counter: 0');
        cy.get('button').contains('Increment +').click();
        cy.get('h3').contains('NgRx Counter: 1');
    })
})