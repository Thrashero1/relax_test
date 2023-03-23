import sel from '../helpers/selectors'

Cypress.Commands.add('loginSuccess', (user, pass) => {

        cy.get(sel.user).type(user)
        .get(sel.pass).type(pass)
        .get(sel.login).click()
        cy.get(sel.title).should('be.visible')
        .and('have.text', 'Products')
})

Cypress.Commands.add('loginFailed', (user, pass) => {
    if (user === undefined && pass === undefined) {
        cy.get(sel.login).click()
        cy.get(sel.error).should('have.text', 'Epic sadface: Username is required')
    }

    else if (user != undefined && pass === undefined) {
        cy.get(sel.user).type(user)
        .get(sel.login).click()
        cy.get(sel.error).should('contain.text', 'Epic sadface: Password is required')
    }

    else if (user === undefined && pass != undefined) {
        cy.get(sel.pass).type(pass)
        .get(sel.login).click()
        cy.get(sel.error).should('have.text', 'Epic sadface: Username is required')
    }
})

Cypress.Commands.add('closePopUp', () => {
    cy.get('body').then($popup => {
        if ($popup.find('[aria-describedby="sheet-close-button-description"]').length > 0) {
            cy.get('[aria-describedby="sheet-close-button-description"]').first().click({force:true})
        }
    })
})