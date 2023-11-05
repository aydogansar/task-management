/// <reference types="cypress" />

import Title from './index';

it('mounts', () => {
  cy.mount(<Title>Başlık!</Title>);

  cy.get('[data-cy=title]').should('have.prop', 'tagName').should('eq', 'DIV');
});

it('should be h1 element', () => {
  cy.mount(<Title level={1}>H1 Başlık</Title>);

  cy.get('[data-cy=title]').should('have.prop', 'tagName').should('eq', 'H1');
});
