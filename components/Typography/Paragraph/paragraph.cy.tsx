/// <reference types="cypress" />

import Paragraph from './index';

it('mounts', () => {
  cy.mount(<Paragraph>Test!</Paragraph>);

  cy.get('[data-cy=text]').should('have.prop', 'tagName').should('eq', 'P');
});
