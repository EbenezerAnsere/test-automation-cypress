/// <reference types="Cypress" />

class Contact {

    open(){
        cy.visit('http://localhost:3000/contacts');
        cy.url().should('include', 'contacts');
    }

     title(){
        cy.get('h1').should('contain', 'Appointment Planner');
    }
    
    contactBtn(){
        cy.get('.active').should('be.visible').click()
    }

    addContact(){
        cy.contains('Add Contact').should('be.visible')
    }

    fillContact(){
        cy.get('input[name=name]').should('be.visible').and('be.enabled').type('kwabena');
        cy.get('input[name=phone]').should('be.visible').and('be.enabled').type('023945483');
        cy.get('input[name=email]').should('be.visible').and('be.enabled').type('kwabena@amalitech.org');
        cy.contains('Add Contact').should('be.visible').click();
    }
}

export default new Contact;