import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/[locale]/layout';
import '@testing-library/jest-dom';

// getProfiles モック
jest.mock('@/app/services', () => ({
  getProfiles: jest.fn().mockResolvedValue([
    { _id: { toString: () => '1' }, name: 'Alice' },
    { _id: { toString: () => '2' }, name: 'Bob' },
  ]),
}));

// setRequestLocale モック
jest.mock('next-intl/server', () => ({
  setRequestLocale: jest.fn(),
}));

type MockLayoutContentProps = {
  locale: string;
  profiles: { _id: string; name: string }[];
  children: React.ReactNode;
};


// LayoutContent をモック
jest.mock('@/app/components/LayoutContent', () => {
  const MockLayoutContent = ({ locale, profiles, children }: MockLayoutContentProps) => (
    <div data-testid="layout-content">
      <div data-testid="locale">{locale}</div>
      <div data-testid="profiles">{profiles.map((p) => p.name).join(', ')}</div>
      {children}
    </div>
  );
  MockLayoutContent.displayName = 'MockLayoutContent';
  return MockLayoutContent;
});


describe('src/app/[locale]/layout.tsx', () => {
  it('renders layout with profiles and children correctly', async () => {
    const mockParams = { locale: 'en' };
    const mockChildren = <div data-testid="children">Test Content</div>;

    render(await RootLayout({ children: mockChildren, params: mockParams }));

    expect(screen.getByTestId('layout-content')).toBeInTheDocument();
    expect(screen.getByTestId('locale')).toHaveTextContent('en');
    expect(screen.getByTestId('profiles')).toHaveTextContent('Alice, Bob');
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
