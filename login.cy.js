export default class loginPage {
    // Existing Methods
    static verifyLoginPage() {
      return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonSubmit(){
        return cy.get('[type="submit"]');
    }
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }

    // Forgot Password Methods
    static clickForgotPassword() {
        return cy.get('p.orangehrm-login-forgot-header').click();
    }
    static verifyForgotPasswordPage() {
        return cy.get('h6').contains('Reset Password');
    }
    static inputUsernameForgotPassword() {
        return cy.get('[name="username"]');
    }
    static clickResetPasswordButton() {
        return cy.get('[type="submit"]').contains('Reset Password').click();
    }
    static verifyForgotPasswordSuccessMessage() {
        return cy.get('h6.oxd-text--h6.orangehrm-forgot-password-title');
    }
    

    // Admin Dashboard Methods
    static clickAdminMenu() {
        return cy.get('.oxd-main-menu-item').contains('Admin').click();
    }
    static verifyAdminDashboardPage() {
        return cy.get('h5.oxd-table-filter-title').contains('System Users');
    }
    
}
