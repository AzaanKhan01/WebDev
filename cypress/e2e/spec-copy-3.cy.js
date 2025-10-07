describe('Load Pure Up Website', () => {
  const siteUrl = 'https://pureup.vercel.app/'; // Replace with your actual Vercel URL

  // Test 1: Ensure the website loads successfully and has a title
  it('Should load the website successfully', () => {
    cy.visit('https://pureup.vercel.app/'); // Open the website
    cy.title().should('not.be.empty'); // Check that the page has a title
    cy.log('Website loaded successfully');
  });

  // Test 2: Check if a specific element (button) is visible
  it('Should display Soil Check Button', () => {
    cy.visit('https://pureup.vercel.app/');
    cy.contains('Soil Check').should('be.visible'); // Replace 'Welcome' with actual heading or text
    cy.log('Soil Check Button is visible');
  });
  it('Should display Home', () => {
    cy.visit('https://pureup.vercel.app/');
    cy.contains('Home').should('be.visible'); // Replace 'Welcome' with actual heading or text
    cy.log('Home is visible');
  });
  it('Should display Air Composition', () => {
    cy.visit('https://pureup.vercel.app/');
    cy.contains('Air Composition').should('be.visible'); // Replace 'Welcome' with actual heading or text
    cy.log('Air Composition is visible');
  });
  it('Should display Neaby Nurseries', () => {
    cy.visit('https://pureup.vercel.app/');
    cy.contains('Nearby Nurseries').should('be.visible'); // Replace 'Welcome' with actual heading or text
    cy.log('Nearby Nurseries is visible');
  });
});
