import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/[locale]/layout';
import '@testing-library/jest-dom';

jest.mock('@/app/services', () => ({
  getProfiles: jest.fn().mockResolvedValue([
    { _id: '1', name: 'Alice' },
    { _id: '2', name: 'Bob' },
  ]),
}));

jest.mock('next-intl/server', () => ({
  setRequestLocale: jest.fn(),
}));

jest.mock('@/app/components/LogoutButton', () => {
  const MockLogoutButton = () => (
    <div data-testid="logout-button">Mock LogoutButton</div>
  );
  MockLogoutButton.displayName = 'MockLogoutButton';
  return MockLogoutButton;
});

// テスト用の props
const mockParams = { locale: 'en' };
const mockChildren = <div data-testid="children">Test Content</div>;

describe('RootLayout', () => {
  it('正しくプロファイルとリンクを表示する', async () => {
    render(await RootLayout({ children: mockChildren, params: mockParams }));

    // プロファイルリンクの確認
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();

    // ナビゲーションボタンの確認
    expect(screen.getByText('My Page')).toBeInTheDocument();
    expect(screen.getByText('Registration')).toBeInTheDocument();

    // LogoutButtonとchildrenの確認
    expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
