/// <reference types="cypress" />

import Text from './index';

import '../../../app/globals.tw.css';

it('mounts', () => {
  cy.mount(<Text>Test!</Text>);

  cy.get('[data-cy=text]').should('have.prop', 'tagName').should('eq', 'SPAN');
});

it('should be div(block) element', () => {
  cy.mount(<Text block>Test!</Text>);

  cy.get('[data-cy=text]').should('have.prop', 'tagName').should('eq', 'DIV');
});
