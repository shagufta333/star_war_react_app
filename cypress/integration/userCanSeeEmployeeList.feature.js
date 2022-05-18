describe('user can see employee list', () => {
  
  beforeEach(() => {
    cy.visit('/')
  });
  it('is expected to display strat war charators', () => {
    cy.get("[data-cy=employee-list]").children().should('have.length', 10);
    
  })

 
})