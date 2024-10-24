import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";

// Existing Login Test
Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text', 'Login');
});

When('I submit the Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    loginPage.inputPassword().type('admin123');
});

Then('I click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('action');
    loginPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I verify login success', () => {
    loginPage.dashboardPage().should('have.text', 'Dashboard');
});

// Forgot Password Test
When('I click the Forgot Password link', () => {
    loginPage.clickForgotPassword();
});

Then('I should see the Forgot Password page', () => {
    loginPage.verifyForgotPasswordPage().should('have.text', 'Reset Password');
});

When('I submit my Username for password reset', () => {
    loginPage.inputUsernameForgotPassword().type('Admin');
    loginPage.clickResetPasswordButton();
});

Then('I verify forgot password success', () => {
    loginPage.verifyForgotPasswordSuccessMessage().should('have.text', 'Reset Password link sent successfully');
});


// Admin Dashboard Access
Given('I am logged in successfully', () => {
    cy.loginAsAdmin();  
});

When('I navigate to the Admin dashboard', () => {
    loginPage.clickAdminMenu();
    cy.intercept('GET', '**/admin/*').as('adminDashboard');
    cy.wait('@adminDashboard', { timeout: 10000 });
});

Then('I should see the Admin dashboard page', () => {
    loginPage.verifyAdminDashboardPage().should('have.text', 'System Users');
});
