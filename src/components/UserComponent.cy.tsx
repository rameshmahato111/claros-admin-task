/// <reference types="cypress" />
import UserComponent from "./UserComponent";

describe("user component", () => {
  const mockUserData = {
    id: "1",
    name: {
      firstname: "ramesh",
      lastname: "mahato",
    },
    username: "rameshma",
    phone: "0123456789",
    address: {
      city: "chitwan",
      street: "museum road",
    },
  };

  it("renders user details correctly", () => {
    cy.mount(<UserComponent user={mockUserData} />);

    // Name (firstname)
    cy.contains("ramesh").should("exist");
    cy.contains("mahato").should("exist")
    // Username
    cy.contains("rameshma").should("exist");

    // Address (city)
    cy.contains("chitwan").should("exist");
  });
});
