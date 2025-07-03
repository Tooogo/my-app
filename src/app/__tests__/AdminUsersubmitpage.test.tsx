import { render, screen } from '@testing-library/react';
import HomePage from '@/app/submit/page'; // 実際のファイルパスに合わせて変更
import '@testing-library/jest-dom';

// ParentComponent をモック
jest.mock('@/app/components/registerAdminComponent', () => {
  const MockParentComponent = () => (
    <div data-testid="mock-parent-component">Mock ParentComponent</div>
  );
  MockParentComponent.displayName = 'MockParentComponent';
  return MockParentComponent;
});

describe('HomePage', () => {
  it('Login の見出しと ParentComponent が表示される', () => {
    render(<HomePage />);

    // "Login" の見出しがあるか
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();

    // ParentComponent（モック）がレンダリングされているか
    expect(screen.getByTestId('mock-parent-component')).toBeInTheDocument();
    expect(screen.getByText('Mock ParentComponent')).toBeInTheDocument();
  });
});
