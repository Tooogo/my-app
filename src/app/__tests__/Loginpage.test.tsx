import { render, screen } from '@testing-library/react';
import HomePage from '@/app/login/page'; // HomePage が定義されているファイル
import '@testing-library/jest-dom';

// AdminComponent（ParentComponent）をモック
jest.mock('@/app/components/AdminComponent', () => {
  const MockedAdminComponent = () => (
    <div data-testid="admin-component">Mocked AdminComponent</div>
  );
  MockedAdminComponent.displayName = 'MockedAdminComponent';
  return MockedAdminComponent;
});

describe('HomePage コンポーネント', () => {
  it('Login 見出しと AdminComponent を表示する', () => {
    render(<HomePage />);

    // h1タイトルが存在するか
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();

    // モックされた AdminComponent が表示されているか
    expect(screen.getByTestId('admin-component')).toBeInTheDocument();
    expect(screen.getByText('Mocked AdminComponent')).toBeInTheDocument();
  });
});
