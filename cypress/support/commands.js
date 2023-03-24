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

Cypress.Commands.add('origin1', (destShort, destFull) => {
    cy.get('[data-stid="location-field-leg1-origin-menu-trigger"]').click({ force:true })
    cy.get('#location-field-leg1-origin').type(destShort)
    .get(`[aria-label="${destFull}"]`).click()
})

Cypress.Commands.add('destination1', (destShort, destFull) => {
    cy.get('[data-stid="location-field-leg1-destination-menu-trigger"]').click()
    cy.get('#location-field-leg1-destination').type(destShort)
    .get(`[aria-label="${destFull}"]`).click()
})

Cypress.Commands.add('destination2', (destShort, destFull) => {
    cy.get('[data-stid="location-field-leg2-destination-menu-trigger"]').click()
    cy.get('#location-field-leg2-destination').type(destShort)
    .get(`[aria-label="${destFull}"]`).click()
    
})

Cypress.Commands.add('destination3', (destShort, destFull) => {
    cy.get('[data-stid="location-field-leg3-destination-menu-trigger"]').click()
    cy.get('#location-field-leg3-destination').type(destShort)
    .get(`[aria-label="${destFull}"]`).click()    
})

Cypress.Commands.add('addDates', (day1, day2, day3) => {
    if(day1 != undefined) {
        cy.get('[data-name="d1"]').first().click()
        .get(`[data-day="${day1}"]`).first().click()
        .get('[data-stid="apply-date-picker"]').click()
    }

    if(day2 != undefined) {
        cy.get('[data-name="d1"]').first().click()
        .get(`[data-day="${day2}"]`).first().click()
        .get('[data-stid="apply-date-picker"]').click()
    }

    if(day3 != undefined) {
        cy.get('[data-name="d1"]').eq(1).click()
        .get(`[data-day="${day3}"]`).first().click()
        .get('[data-stid="apply-date-picker"]').click()
    }
})

Cypress.Commands.add('addAdults', (amount) => {

    for(let i = 1; i > amount; i++) {
        cy.get('[data-testid="travelers-field"]').click()
        .get('[aria-label="Increase adults"]').click()
    }

})