/// <reference types="cypress" />
/// <reference path="../../cypress/support/component.ts" />
import Button from './Button'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button />)
  })
})