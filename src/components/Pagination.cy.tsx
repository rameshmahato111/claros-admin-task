/// <reference types="cypress" />
import Pagination from './Pagination'

// Mock data for testing
const mockData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}))

describe('<Pagination />', () => {
  it('renders', () => {
    cy.mount(
      <Pagination
        data={mockData}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
  })

  it('displays correct number of items per page (default 5)', () => {
    cy.mount(
      <Pagination
        data={mockData}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    cy.get('[data-testid="item"]').should('have.length', 5)
    cy.get('[data-testid="item"]').first().should('contain', 'Item 1')
    cy.get('[data-testid="item"]').last().should('contain', 'Item 5')
  })

  it('displays correct number of items with custom pageSize', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={3}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    cy.get('[data-testid="item"]').should('have.length', 3)
  })

  it('displays correct number of page buttons', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // 12 items / 5 per page = 3 pages (rounded up)
    cy.get('button').contains('1').should('exist')
    cy.get('button').contains('2').should('exist')
    cy.get('button').contains('3').should('exist')
  })

  it('navigates to next page when next button is clicked', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // Click next button (last button with icon)
    cy.get('button').last().click()
    cy.get('[data-testid="item"]').first().should('contain', 'Item 6')
    cy.get('[data-testid="item"]').last().should('contain', 'Item 10')
  })

  it('navigates to previous page when previous button is clicked', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // Go to page 2 first
    cy.get('button').contains('2').click()
    cy.get('[data-testid="item"]').first().should('contain', 'Item 6')
    
    // Then go back to page 1 (first button with icon)
    cy.get('button').first().click()
    cy.get('[data-testid="item"]').first().should('contain', 'Item 1')
  })

  it('navigates to specific page when page number is clicked', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // Click page 3
    cy.get('button').contains('3').click()
    cy.get('[data-testid="item"]').first().should('contain', 'Item 11')
    cy.get('[data-testid="item"]').last().should('contain', 'Item 12')
  })

  it('disables previous button on first page', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // Previous button (first button) should be disabled on page 1
    cy.get('button').first().should('be.disabled')
  })

  it('disables next button on last page', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // Go to last page (page 3)
    cy.get('button').contains('3').click()
    // Next button (last button) should be disabled
    cy.get('button').last().should('be.disabled')
  })

  it('highlights active page button', () => {
    cy.mount(
      <Pagination
        data={mockData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    // Check that page 1 button has active class (green background)
    cy.get('button:contains("1")').should('have.class', 'bg-green-400')
    cy.get('button:contains("2")').should('have.class', 'bg-gray-500')
    
    // Click page 2
    cy.get('button:contains("2")').click()
    cy.get('button:contains("2")').should('have.class', 'bg-green-400')
    cy.get('button:contains("1")').should('have.class', 'bg-gray-500')
  })

  it('handles empty data array', () => {
    cy.mount(
      <Pagination
        data={[] as typeof mockData}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    cy.get('[data-testid="item"]').should('not.exist')
    // Should not show page buttons for empty data
    cy.get('button').contains('1').should('not.exist')
  })

  it('handles data with less items than pageSize', () => {
    const smallData = Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }))
    
    cy.mount(
      <Pagination
        data={smallData}
        pageSize={5}
        renderRow={(item) => <div data-testid="item">{item.name}</div>}
      />
    )
    cy.get('[data-testid="item"]').should('have.length', 3)
    // Should show only one page button
    cy.get('button').contains('1').should('exist')
    cy.get('button').contains('2').should('not.exist')
  })

  it('calls renderRow for each item', () => {
    cy.mount(
      <Pagination
        data={mockData.slice(0, 5)}
        renderRow={(item) => (
          <div data-testid="item" data-id={item.id}>
            {item.name}
          </div>
        )}
      />
    )
    cy.get('[data-testid="item"]').should('have.length', 5)
    cy.get('[data-id="1"]').should('contain', 'Item 1')
    cy.get('[data-id="5"]').should('contain', 'Item 5')
  })
})

