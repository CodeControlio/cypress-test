
describe("Greetings Form Submission" , ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it("should submit the form", ()=>{
        cy.get("#name").type("Anam")
        cy.get("#greetings").should('not.exist')
        cy.get('form').submit()
        cy.get("#greetings").should('exist')


    })
})

