describe('Vercel Site Tests', () => {
  const siteUrl = 'https://your-vercel-site.vercel.app'; 
  

  it('https://your-vercel-site.vercel.app', () => {
    cy.visit('https://your-vercel-site.vercel.app');
    cy.contains('PlantWiki').should('be.visible'); 
  });

  it('Checks if a button works', () => {
    cy.visit('https://your-vercel-site.vercel.app');
    cy.get('Check Soil').click();
    cy.contains('Air Composition').should('be.visible'); 

  
})
});
