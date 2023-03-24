/// <reference types="cypress" />

import sel from '../helpers/selectors'

describe ("Verify that login functions as needed", () => {

    const user = Cypress.env('username')
    const pass = Cypress.env('password')

    beforeEach (() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Fails with no credentials', () => {
        cy.loginFailed()
    })

    it('Fails with no password', () => {
        cy.loginFailed('username')
        
    })

    it('Fails with no no username', () => {
        cy.loginFailed(undefined, 'password')
    })

    it('Logs in successfully', () => {
        cy.loginSuccess(user, pass)
    })
})