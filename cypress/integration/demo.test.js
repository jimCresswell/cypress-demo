describe('Demo Test', function() {
  it("The 'type' link works", function() {
    // Open URL.
    cy.visit('https://example.cypress.io');

    // Get element by text content and click.
    cy.contains("type")
      .click();

    // Check URL.
    cy.url()
      .should("include", "/commands/actions");

    // Get element by CSS selector, type into it, assert contents.
    cy.get(".action-email")
      .type("1@1.com")
      .should("have.value", "1@1.com");
  })
});
