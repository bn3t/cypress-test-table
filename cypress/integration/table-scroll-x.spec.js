/// <reference types="cypress" />

describe("Table with scroll-x (test will fail)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should show table (test will fail)", () => {
    cy.get("h1").contains("Table test");
    cy.get("table").should("exist");
  });

  it.skip("should really fail", () => {
    cy.get("h1").contains("BLAH Table test");
    cy.get("table").should("exist");
  });
});
