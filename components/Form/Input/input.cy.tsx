/// <reference types="cypress" />

import Input from './index';

import '../../../app/globals.tw.css';

const NAME = 'name';
const LABEL = 'Name';

it('mounts', () => {
  cy.mount(
    <Input
      name="name"
      label="Name"
    />
  );
});

it('should id and label correct', () => {
  cy.mount(
    <Input
      name={NAME}
      label={LABEL}
    />
  );

  cy.get('[data-cy=input]').children('label').should('have.attr', 'for').should('eq', NAME);
  cy.get('[data-cy=input]').children('label').should('have.text', LABEL);
  cy.get('[data-cy=input]').children('input').should('have.attr', 'id').should('eq', NAME);
});
