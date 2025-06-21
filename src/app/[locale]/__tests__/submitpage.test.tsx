// __tests__/SubmitPage.test.tsx
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/[locale]/submit/page';
import { getSession } from '@/lib/session/getSession';

// モック化
jest.mock('@/lib/session/getSession', () => ({
  getSession: jest.fn(),
}));

jest.mock('@/app/components/UserForm', () => {
  const MockedUserForm = () => (
    <div data-testid="user-form">Mocked UserForm</div>
  );
  MockedUserForm.displayName = 'MockedUserForm';
  return MockedUserForm;
});

describe('SubmitPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders UserForm and calls getSession', async () => {
    const mockSession = { user: { name: 'John' } };
    (getSession as jest.Mock).mockResolvedValue(mockSession);

    render(await HomePage());

    // セッション関数が呼ばれたか確認
    expect(getSession).toHaveBeenCalled();

    // ヘッダーとUserFormの表示確認
    expect(screen.getByText('User Registration')).toBeInTheDocument();
    expect(screen.getByTestId('user-form')).toBeInTheDocument();
  });
});
