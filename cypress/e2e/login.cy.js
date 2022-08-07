let websiteAddress = "http://automationpractice.com/index.php";

let botaoLogin = "#header > div.nav > div > div > nav > div.header_user_info > a";

describe('login application', () => {
  it('should login successfully', () => {
    cy.visit(websiteAddress)
    cy.get(botaoLogin).click()
    // pega input email pelo atributo ID
    let emailInput = cy.get('[id="email"]');
    emailInput.type("teste1@teste.1com.br");

    // pegar input pelo por outros atributos, nesse caso name
    let passwordInput = cy.get('[name="passwd"]');
    passwordInput.type("123123");

    // pegar input button e clicar
    let botaoLogar = cy.get('[id="SubmitLogin"]').click()

    let cabecalhoLogin = cy.get('.page-heading')

    // verificar se o conteúdo do text é o esperado
    cy.get('.page-heading').should('have.text', 'My account')



  })
})