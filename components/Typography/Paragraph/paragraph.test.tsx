import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { AppProviders } from 'providers';
import themes from 'theme';

import Paragraph from './index';

const testId = 'paragraph';

const content = 'This a test paragraph';

const color = 'neonYellowGreen';

describe('Paragraph', () => {
  it('should be rendered with p tag name', () => {
    render(<Paragraph data-testid={testId}>{content}</Paragraph>);

    const paragraph = screen.getByTestId(testId);

    const tagName = paragraph.tagName;

    expect(paragraph).toBeInTheDocument();

    expect(tagName).toEqual('P');
  });

  it(`should contain "${content}"`, () => {
    render(<Paragraph data-testid={testId}>{content}</Paragraph>);

    const text = screen.getByTestId(testId).textContent;

    expect(text).toEqual(content);
  });

  it('should have font size 2rem', () => {
    render(
      <Paragraph
        data-testid={testId}
        size={2}
      >
        {content}
      </Paragraph>
    );

    const paragraph = screen.getByTestId(testId);

    expect(paragraph).toHaveStyle('font-size:2rem');
  });

  it(`should have color ${color}`, () => {
    render(
      <AppProviders>
        <Paragraph
          data-testid={testId}
          color={color}
        >
          {content}
        </Paragraph>
      </AppProviders>
    );

    const paragraph = screen.getByTestId(testId);

    expect(paragraph).toHaveStyle(`color:${themes.main.colors[color]}`);
  });
});
