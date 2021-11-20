/// <reference types="cypress"/>

it('google test', function(){
    cy.visit('https://google.com')
    cy.get('.gLFyf',{timeout:6000}).type('Muhammad Ghous Khan{enter}')
    cy.get('[data-hveid="CAQQAA"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()
})