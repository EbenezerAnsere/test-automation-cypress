/// <reference types="Cypress" />

import Contact from '../integration/Page Object - Login Test case/contacttestcase'

describe('Login Suites', () => {

      it('Visit Contact page', () => {
            Contact.open();
      })
      it('should verify contact test case', () => {
            Contact.title();
            Contact.contactBtn();
            Contact.addContact();
            Contact.fillContact();
      })
});