/// <reference types="cypress" />
import SearchComponent from "./SearchComponent";

describe("SearchComponent", () => {
  it("renders", () => {
    const onSearch = cy.stub().as("onSearch");
    cy.mount(<SearchComponent onSearch={onSearch} />);
    cy.get("input").should("exist");
  });

  it("displays placeholder text", () => {
    const onSearch = cy.stub().as("onSearch");
    cy.mount(
      <SearchComponent onSearch={onSearch} placeholder="Search here..." />
    );
    cy.get("input").should("have.attr", "placeholder", "Search here...");
  });

  it("calls onSearch with debounced value", () => {
    const onSearch = cy.stub().as("onSearch");
    cy.mount(<SearchComponent onSearch={onSearch} delay={300} />);

    cy.get("input").type("test");
    cy.wait(400); // Wait for debounce delay
    cy.get("@onSearch").should("have.been.calledWith", "test");
  });

  it("updates input value when typing", () => {
    const onSearch = cy.stub().as("onSearch");
    cy.mount(<SearchComponent onSearch={onSearch} />);

    cy.get("input").type("hello");
    cy.get("input").should("have.value", "hello");
  });

  it("uses default placeholder when not provided", () => {
    const onSearch = cy.stub().as("onSearch");
    cy.mount(<SearchComponent onSearch={onSearch} />);
    cy.get("input").should("have.attr", "placeholder", "Search here...");
  });

  it("accepts defaultValue prop", () => {
    const onSearch = cy.stub().as("onSearch");
    cy.mount(
      <SearchComponent onSearch={onSearch} defaultValue="initial value" />
    );
    cy.get("input").should("have.value", "initial value");
  });
});

