context("Search address", () => {
  it("should be able to find an address using CEP", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("input").type(88064092);
    cy.contains("Buscar pelo CEP").click();
  });
});
