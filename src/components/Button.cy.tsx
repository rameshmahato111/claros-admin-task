/// <reference types="cypress" />
/// <reference path="../../cypress/support/component.ts" />
import Button from './Button'

describe('Button Component', () => {
  it('renders', () => {
    cy.mount(<Button />)
    cy.get('button').should('exist')
  })

  it('renders with children text', () => {
    cy.mount(<Button>Click me</Button>)
    cy.get('button').should('contain', 'Click me')
  })

  it('renders with icon', () => {
    const icon = <span data-testid="icon">🚀</span>
    cy.mount(<Button icon={icon}>Button</Button>)
    cy.get('[data-testid="icon"]').should('exist')
    cy.get('button').should('contain', 'Button')
  })

  it('calls onClick when clicked', () => {
    const onClick = cy.stub().as('onClick')
    cy.mount(<Button onClick={onClick}>Click me</Button>)
    cy.get('button').click()
    cy.get('@onClick').should('have.been.called')
  })

  it('applies custom className', () => {
    cy.mount(<Button className="custom-class">Button</Button>)
    cy.get('button').should('have.class', 'custom-class')
  })

  it('is disabled when disabled prop is true', () => {
    cy.mount(<Button disabled>Disabled Button</Button>)
    cy.get('button').should('be.disabled')
  })

  it('renders without icon when icon is not provided', () => {
    cy.mount(<Button>Text Only</Button>)
    cy.get('button').should('contain', 'Text Only')
    cy.get('button span').should('have.length', 1) // Only children span
  })

  it('renders with both icon and children', () => {
    const icon = <span data-testid="icon">⭐</span>
    cy.mount(<Button icon={icon}>Star Button</Button>)
    cy.get('[data-testid="icon"]').should('exist')
    cy.get('button').should('contain', 'Star Button')
  })

  it('applies default classes', () => {
    cy.mount(<Button>Button</Button>)
    cy.get('button').should('have.class', 'flex')
    cy.get('button').should('have.class', 'items-center')
    cy.get('button').should('have.class', 'rounded-lg')
  })
})