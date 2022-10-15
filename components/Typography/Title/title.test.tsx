import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { AppProviders } from 'providers';
import themes from 'theme';

import Title from './index';

const testId = 'title';

const content = 'This a test title';

const color = 'neonYellowGreen';

describe('Title', () => {
  it('should be rendered with div tag name', () => {
    render(<Title data-testid={testId}>{content}</Title>);

    const title = screen.getByTestId(testId);

    const tagName = title.tagName;

    expect(title).toBeInTheDocument();

    expect(tagName).toEqual('DIV');
  });

  it('should be rendered with h1 tag name', () => {
    render(
      <Title
        data-testid={testId}
        level={1}
      >
        {content}
      </Title>
    );

    const title = screen.getByTestId(testId);

    const tagName = title.tagName;

    expect(tagName).toEqual('H1');
  });

  it(`should contain "${content}"`, () => {
    render(<Title data-testid={testId}>{content}</Title>);

    const title = screen.getByTestId(testId).textContent;

    expect(title).toEqual(content);
  });

  it('should have font size 2rem', () => {
    render(
      <Title
        data-testid={testId}
        size={2}
      >
        {content}
      </Title>
    );

    const title = screen.getByTestId(testId);

    expect(title).toHaveStyle('font-size:2rem');
  });

  it(`should have color ${color}`, () => {
    render(
      <AppProviders>
        <Title
          data-testid={testId}
          color={color}
        >
          {content}
        </Title>
      </AppProviders>
    );

    const title = screen.getByTestId(testId);

    expect(title).toHaveStyle(`color:${themes.main.colors[color]}`);
  });
});
