// src/app/components/__tests__/LayoutContent.test.tsx

import { render, screen } from '@testing-library/react';
import LayoutContent from '@/app/components/LayoutContent';
import '@testing-library/jest-dom';

// LogoutButton をモック（実物不要）
jest.mock('@/app/components/LogoutButton', () => {
  const MockLogoutButton = () => <div data-testid="logout-button">Mock LogoutButton</div>;
  MockLogoutButton.displayName = 'MockLogoutButton';
  return MockLogoutButton;
});


describe('LayoutContent', () => {
  const mockProfiles = [
    { _id: '1', name: 'Alice' },
    { _id: '2', name: 'Bob' }
  ];
  const mockChildren = <div data-testid="test-children">Test Content</div>;

  it('プロファイルとナビゲーションリンク、ボタンを表示する', () => {
    render(<LayoutContent locale="en" profiles={mockProfiles}>{mockChildren}</LayoutContent>);

    // プロファイルリンク確認
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();

    // ボタン確認
    expect(screen.getByText('My Page')).toBeInTheDocument();
    expect(screen.getByText('Registration')).toBeInTheDocument();

    // LogoutButton と children
    expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    expect(screen.getByTestId('test-children')).toBeInTheDocument();
  });
});
