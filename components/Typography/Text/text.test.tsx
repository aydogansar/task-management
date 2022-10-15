import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { AppProviders } from 'providers';
import themes from 'theme';

import Text from './index';

const testId = 'text';

const content = 'This a test text';

const color = 'neonYellowGreen';

describe('Text', () => {
  it('should be rendered with span tag name', () => {
    render(<Text data-testid={testId}>{content}</Text>);

    const text = screen.getByTestId(testId);

    const tagName = text.tagName;

    expect(text).toBeInTheDocument();

    expect(tagName).toEqual('SPAN');
  });

  it('should be rendered with div tag name', () => {
    render(
      <Text
        data-testid={testId}
        block
      >
        {content}
      </Text>
    );

    const text = screen.getByTestId(testId);

    const tagName = text.tagName;

    expect(tagName).toEqual('DIV');
  });

  it(`should contain "${content}"`, () => {
    render(<Text data-testid={testId}>{content}</Text>);

    const text = screen.getByTestId(testId).textContent;

    expect(text).toEqual(content);
  });

  it('should have font size 2rem', () => {
    render(
      <Text
        data-testid={testId}
        size={2}
      >
        {content}
      </Text>
    );

    const text = screen.getByTestId(testId);

    expect(text).toHaveStyle('font-size:2rem');
  });

  it(`should have color ${color}`, () => {
    render(
      <AppProviders>
        <Text
          data-testid={testId}
          color={color}
        >
          {content}
        </Text>
      </AppProviders>
    );

    const text = screen.getByTestId(testId);

    expect(text).toHaveStyle(`color:${themes.main.colors[color]}`);
  });
});
