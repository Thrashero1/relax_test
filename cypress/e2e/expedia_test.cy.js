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

    it('gotes to the multicity page', () => {
        cy.contains('Flights').click({force: true})
        cy.contains('Multi-city').should('be.visible').click()
        cy.get('[data-stid="location-field-leg1-origin-menu-trigger"]', {timeout: 10000}).click()
        cy.get('#location-field-leg1-origin').type('lon')
        .get('[aria-label="London (LHR - Heathrow) United Kingdom"]').click()
        cy.get('[data-stid="location-field-leg1-destination-menu-trigger"]').click()
        cy.get('#location-field-leg1-destination').type('mal')
        .get('[aria-label="Luqa (MLA - Malta Intl.) Malta"]').click()
        cy.get('[data-stid="location-field-leg2-destination-menu-trigger"]').click()
        cy.get('#location-field-leg2-destination').type('fra')
        .get('[aria-label="Frankfurt (FRA - Frankfurt Intl.) Germany"]').click()
        
        
    })

    it('adds another flight', () => {

    cy.contains('Add another flight').click()
    cy.get('[data-stid="location-field-leg3-destination-menu-trigger"]').click()
        cy.get('#location-field-leg3-destination').type('lon')
        .get('[aria-label="London (LHR - Heathrow) United Kingdom"]').click()
    })

    it('Add the dates for the flights', () => {
        cy.get('[data-name="d1"]').first().click()
        .get('[data-day="1"]').first().click()
        .get('[data-stid="apply-date-picker"]').click()
        cy.get('[data-name="d1"]').eq(1).click()
        .get('[data-day="4"]').first().click()
        .get('[data-stid="apply-date-picker"]').click()
        cy.get('[data-name="d1"]').eq(2).click()
        .get('[data-day="7"]').first().click()
        .get('[data-stid="apply-date-picker"]').click()
    })

    it('add adults and search', () => {
        cy.get('[data-testid="travelers-field"]').click()
        .get('[aria-label="Increase adults"]').click()
        cy.get('[data-testid="travelers-field"]').click().get('[aria-label="Increase adults"]').click()
        cy.get('[data-testid="travelers-field"]').click().get('[aria-label="Increase adults"]').click()
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