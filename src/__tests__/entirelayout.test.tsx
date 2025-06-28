// src/__tests__/entirelayout.test.tsx
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';
import '@testing-library/jest-dom';

jest.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

jest.mock('next-intl', () => ({
  useMessages: () => ({ hello: 'こんにちは' }),
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('RootLayout', () => {
  it('renders children and applies font classes and locale provider', () => {
    render(
      <RootLayout params={{ locale: 'ja' }}>
        <div>Test Content</div>
      </RootLayout>
    );

    const body = document.querySelector('body');
    expect(body?.className).toMatch(/--font-geist-sans/);
    expect(body?.className).toMatch(/--font-geist-mono/);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
