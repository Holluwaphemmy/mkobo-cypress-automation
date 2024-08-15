import Login_PO from "../page_objects/Login_PO";

describe('Testing Mkobo Payroll Platform', () => {

  const login_PO = new Login_PO()
  let loginData;

  beforeEach(() => {

    cy.fixture('login_data.json').then((data) => {
      loginData = data
    })

  })

  it('login with valid email and valid password', () => {
    login_PO.visitSite()
    login_PO.login(
      loginData.email_field,
      loginData.valid_email,
      loginData.password_field,
      loginData.valid_password,
      loginData.login_button
    )
    login_PO.verifyLogin()
    login_PO.logout(loginData.logout_svg_icon, loginData.logout_button
    )
  })

  it('login with valid email and invalid password', () => {
    login_PO.visitSite()
    login_PO.login(
      loginData.email_field,
      loginData.valid_email,
      loginData.password_field,
      loginData.invalid_password,
      loginData.login_button
    )
    login_PO.assertPasswordError(loginData.error_card, loginData.password_error_message)
  })

  it('login with invalid email and valid password', () => {
    login_PO.visitSite()
    login_PO.login(
      loginData.email_field,
      loginData.invalid_email,
      loginData.password_field,
      loginData.valid_password,
      loginData.login_button
    )
    login_PO.assertEmailError(loginData.error_card, loginData.email_error_message)
  })

})