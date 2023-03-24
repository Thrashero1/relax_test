/// <reference types="cypress" />

describe('', () => {

    before(() => {
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })

    before(() => {
        cy.visit('https://www.expedia.com/')
        cy.get('body').click({force:true})
        cy.closePopUp()
    })

    it('goes to the multicity page', () => {
        cy.contains('Flights').click({force: true})
        cy.contains('Multi-city').should('be.visible').click()
    })

    it('Adds first flights', () => {
        cy.contains('Add another flight').click()
        cy.scrollTo('top')
        cy.destination1('mal', "Luqa (MLA - Malta Intl.) Malta")
        cy.origin1('lon', "London (LHR - Heathrow) United Kingdom")
    })

    it('Adds second flight', () => {
        cy.destination2('fra', "Frankfurt (FRA - Frankfurt Intl.) Germany")
    })

    it('Adds third flight', () => {
        cy.destination3('lon', "London (LHR - Heathrow) United Kingdom")
    })

    it('Add the dates for the flights', () => {
        cy.addDates(1, 4, 7)
    })

    it('add adults and search', () => {
        cy.addAdults(4)
        cy.get('[data-testid="submit-button"]').click()

    })

    it('selects flight', () => {
        cy.get('[data-test-id="select-link"]', {timeout: 8000}).first().click()
        .get('[data-test-id="select-button"]').click()
        cy.wait(5000)
        cy.get('[data-test-id="select-link"]', {timeout: 8000}).first().click()
        .get('[data-test-id="select-button"]').click()
        cy.wait(5000)
        cy.get('[data-test-id="select-link"]', {timeout: 8000}).first().click()
        .get('[data-test-id="select-button"]').click()
    })
})