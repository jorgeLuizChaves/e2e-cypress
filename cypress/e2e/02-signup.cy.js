require('cypress-plugin-tab');

let websiteAddress = "http://automationpractice.com/index.php";

let botaoLogin = "#header > div.nav > div > div > nav > div.header_user_info > a";

describe('signup application', () => {
  it('should register a new user successfully', () => {
    // acessar o site
    cy.visit(websiteAddress)
    // ir para a pagina signup
    cy.get(botaoLogin).click();
    // preencher email novo e clicar em criar nova conta
    cy.get("[id=email_create]").type("email212121@email2.com");
    cy.get("[id=email_create]").tab()
    cy.get("[id=SubmitCreate]").click();
    //preencher formulario e criar conta
    cy.get("[id=id_gender1]").click();
    cy.get("[id=customer_firstname]").type("firstname")
    cy.get("[id=customer_lastname]").type("lastname")
    cy.get("[id=email]").type("lastname")
    cy.get("[id=passwd]").type("123456")
    cy.get("[id=days]").type("11")
    cy.get("[id=days]").type("11")
    cy.get("[id=years]").type("1980")
    cy.get("[id=newsletter]").click()
    cy.get("[id=optin]").click()

    cy.get("[id=firstname]").type("first name")
    cy.get("[id=lastname]").type("lastname")
    cy.get("[id=company]").type("company")
    cy.get("[id=address1]").type("address1")
    cy.get("[id=address2]").type("address2")
    cy.get("[id=city]").type("city")
    cy.get("[id=postcode]").type("00000")

    cy.get("[id=id_country]").select('United States')
    cy.get("[id=id_state]").select('Alabama')




    cy.get("[id=other]").type("esse eh um novo user")
    cy.get("[id=phone]").type("(11) 999999999")
    cy.get("[id=phone_mobile]").type("(11) 999999999")
    cy.get("[id=alias]").type("alias")
    
    
    
    cy.get("[id=submitAccount]").click()
    
    // validar que foi direcionado para a tela de minha conta
    cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account')
    
    
    
    


  })
})