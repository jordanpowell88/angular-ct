import { provideMockStore } from "@ngrx/store/testing"
import { mount } from "../../../projects/angular/src/public-api"
import { CountComponent } from "./count.component"

describe('CountComponent', () => {
    beforeEach(() => {
        mount(CountComponent, { providers: [provideMockStore({})]})
    })

    it('can click the child Button that updates state (triggers change detection)', () => {
        cy.get('h3').contains('Total Clicks: 0');
        cy.get('button').contains('Add +').click();
        cy.get('h3').contains('Total Clicks: 1');
      })
})