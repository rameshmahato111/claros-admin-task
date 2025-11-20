/// <reference types="cypress" />
import ProductComponent from './ProductComponent'

describe('ProductComponent', () => {
  const mockProduct = {
    id: '1',
    title: 'Awesome Product Name',
    price: 199,
    description: 'This is a test product description',
    category: 'electronics',
    image: '/test-image.png',
    rating: {
      rate: 4.5,
      count: 100,
    },
  }

  it('renders product details correctly', () => {
    cy.mount(<ProductComponent product={mockProduct} />)

    // Image
    cy.get('img')
      .should('have.attr', 'src', mockProduct.image)
      .and('have.attr', 'alt', mockProduct.title)

    // Title (first 10 chars + ...)
    cy.contains(mockProduct.title.slice(0, 10) + '...').should('exist')

    // Category
    cy.contains(mockProduct.category).should('exist')

    // Price (convert to string for contains)
    cy.contains(String(mockProduct.price)).should('exist')

    // Buttons (2 buttons = edit + delete)
    cy.get('button').should('have.length', 2)
  })
})
