class Login_PO {

    visitSite() {
        cy.visit('/');
        cy.url().should('eq', 'http://46.101.32.157:5000/auth/login/');
    }

    login(email_fld, email, pword_fld, pword, login_btn) {
        cy.get(email_fld).type(email);
        cy.get(pword_fld).type(pword);
        cy.get(login_btn).click();
    }

    verifyLogin() {
        // Verify that user has been logged in
        cy.url().should('include', '/dashboard/home');
    }

    logout(logout_svg, logout_btn) {
        cy.get(logout_svg).click();
        cy.get(logout_btn).click({ force: true });

        // Verify that user has been logged out
        cy.url().should('include', '/login');
    }

    assertPasswordError(err_card, pwd_err) {
        cy.get(err_card).should('have.text', pwd_err)
    }

    assertEmailError(err_card, email_err) {
        cy.get(err_card).should('have.text', email_err)
    }
}

export default Login_PO;
