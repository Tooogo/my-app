// __tests__/entirelayout.test.tsx
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';
import '@testing-library/jest-dom';

jest.mock('next-intl', () => ({
  ...jest.requireActual('next-intl'),
  useMessages: () => ({
    greeting: 'Hello',
  }),
}));

describe('RootLayout', () => {
  it('renders children and applies font classes and locale provider', () => {
    render(
      <RootLayout params={{ locale: 'en' }}>
        <div>Test Content</div>
      </RootLayout>
    );

    const body = document.querySelector('body');
    expect(body?.className).toMatch(/--font-geist-sans/);
    expect(body?.className).toMatch(/--font-geist-mono/);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
