/// <reference types="cypress" />
import { MemoryRouter } from "react-router-dom";
import SideNavbar from "./Side-Navbar";

describe("SideNavbar Component", () => {
  let mockCloseNav: ReturnType<typeof cy.stub>;

  beforeEach(() => {
    mockCloseNav = cy.stub().as("closeNav");
    cy.mount(
      <MemoryRouter>
        <SideNavbar closeNav={mockCloseNav} />
      </MemoryRouter>
    );
  });

  it("renders", () => {
    cy.get("nav").should("exist");
  });

  it("displays logo and brand name", () => {
    cy.get("img[alt='logo']").should("exist");
    cy.get("img[alt='logo']").should("have.attr", "src", "./assets/logo/logo-img-claros-home.png");
    cy.contains("Claros").should("exist");
  });

  it("renders all navigation items", () => {
    const navItems = [
      "home",
      "products",
      "users",
      "analytics",
      "activities",
      "team member",
      "revenue",
      "reports",
    ];

    navItems.forEach((item) => {
      cy.contains(item).should("exist");
    });
  });

  it("renders navigation links with correct URLs", () => {
    cy.get('a[href="/"]').should("exist");
    cy.get('a[href="/products"]').should("exist");
    cy.get('a[href="/users"]').should("exist");
    cy.get('a[href="/analytics"]').should("exist");
    cy.get('a[href="/activities"]').should("exist");
    cy.get('a[href="/team-members"]').should("exist");
    cy.get('a[href="/revenue"]').should("exist");
    cy.get('a[href="/reports"]').should("exist");
  });

  it("calls closeNav when a navigation link is clicked", () => {
    cy.get('a[href="/products"]').click();
    cy.get("@closeNav").should("have.been.called");
  });

  it("renders icons for each navigation item", () => {
    
    cy.get("nav").within(() => {
      cy.get("span").should("have.length.at.least", 8); // At least 8 icons + text spans
    });
  });

  it("has correct structure with nav, ul, and li elements", () => {
    cy.get("nav").should("exist");
    cy.get("nav ul").should("exist");
    cy.get("nav ul li").should("have.length", 8);
  });

  it("renders navigation items in correct order", () => {
    const expectedOrder = [
      "home",
      "products",
      "users",
      "analytics",
      "activities",
      "team member",
      "revenue",
      "reports",
    ];

    cy.get("nav ul li").each(($li, index) => {
      cy.wrap($li).should("contain", expectedOrder[index]);
    });
  });

  it("applies active class when route matches", () => {
    cy.mount(
      <MemoryRouter initialEntries={["/products"]}>
        <SideNavbar closeNav={mockCloseNav} />
      </MemoryRouter>
    );

    // The active link should have bg-black class
    cy.get('a[href="/products"]').should("have.class", "bg-black");
  });

  it("applies inactive class when route does not match", () => {
    cy.mount(
      <MemoryRouter initialEntries={["/products"]}>
        <SideNavbar closeNav={mockCloseNav} />
      </MemoryRouter>
    );

    // Non-active links should not have bg-black
    cy.get('a[href="/users"]').should("not.have.class", "bg-black");
  });
});
