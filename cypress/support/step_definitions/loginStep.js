import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('L utilisateur est sur la page d accueil d OrangeHRM', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
  
  cy.visit('/auth/login');
  cy.url().should('eq', Cypress.config().baseUrl + '/auth/login');
});

When('L utilisateur saisit un email et un mot de passe valides', () => {
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
});

When('Clique sur le bouton de connexion', () => {
  cy.get('.oxd-button').click();
});

Then('La page du tableau de bord s affiche avec succès', () => {
  cy.url().should('include', '/dashboard');
});