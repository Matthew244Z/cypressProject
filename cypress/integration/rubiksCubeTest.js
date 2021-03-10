const isCubeDone = () => {
    cy.get('[data-cy=formulaControl]').invoke('text')
      .then((text) => {
        if(text != 'Cube is Done!') {    // cube is wrong
            cy.get('[data-cy=nextMove]').click()
            cy.get('[data-cy=cubes]').scrollIntoView()  // scroll back to cubes so animation can be seen
            cy.wait(1000)   // have to wait because of animation
            isCubeDone()
        }
      })
}

describe('Test 1: Cube Solved', function() {
    it('Input formula ', function() {
        cy.visit('localhost:3000')
        cy.get('[data-cy=scrambleInput]').type('F U D R2')
        cy.get('[data-cy=scrambleButton]').click()
    })

    it('Solving cube', function() { // start solving from step 7
        cy.get('[data-cy=startingPoint]').click() 
        isCubeDone()
    })

})


describe('Test 2: Top Front Edge', function() {
  it('Checking top edge', function() {  // check for yellow
    cy.get('[data-cy=topCenter]').should('have.css', 'background-color', 'rgb(255, 255, 0)')
    cy.get('[data-cy=topPosition6]').should('have.css', 'background-color', 'rgb(255, 255, 0)')
  })

  it('Checking front edge', function() {  // check for red
    cy.get('[data-cy=frontCenter]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.get('[data-cy=frontPosition1]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
  
})
