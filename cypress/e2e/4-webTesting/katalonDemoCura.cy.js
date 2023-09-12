describe('Katalon Demo Cura', () => {
  beforeEach(() => {
    //visit site and login 
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#menu-toggle > .fa').click()
    cy.contains('Login').click()
    const username = 'John Doe'
    const password =  'ThisIsNotAPassword'
    cy.get('#txt-username').type(`${username}`)
    cy.get('#txt-password').type(`${password}`)
    cy.get('#btn-login').click()
  })
  

  it('Make Appoinment = Tokyo, Healthcare Program = Medicare', () => {
    const comment = 'Patient name Hana'
    cy.get('select').select('Tokyo CURA Healthcare Center').should('have.value', 'Tokyo CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').check()
    cy.get('#radio_program_medicare').check()
    cy.get('#txt_comment').type(`${comment}`)
    cy.get('#txt_visit_date').type('12-09-2023')
    cy.get('#btn-book-appointment').click()
  })

  it('Make Appoinment = Hongkong, Healthcare Program = Medicaid', () => {
    const comment = 'Patient name Hana'
    cy.get('select').select('Hongkong CURA Healthcare Center').should('have.value', 'Hongkong CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').check()
    cy.get('#radio_program_medicaid').check()
    cy.get('#txt_comment').type(`${comment}`)
    cy.get('#txt_visit_date').type('12-09-2023')
    cy.get('#btn-book-appointment').click()
  })

  it('Make Appoinment = Seoul, Healthcare Program = None', () => {
    const comment = 'Patient name Hana'
    cy.get('select').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').check()
    cy.get('#radio_program_none').check()
    cy.get('#txt_comment').type(`${comment}`)
    cy.get('#txt_visit_date').type('12-09-2023')
    cy.get('#btn-book-appointment').click()
  })
})