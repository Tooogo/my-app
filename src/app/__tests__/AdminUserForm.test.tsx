import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserForm from '@/app/components/AdminUserForm';
import { AdminProfile } from '@/app/services/AdminUsertypes';

// `next/navigation` をモック
const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

const mockSubmit = jest.fn();

const defaultProfile: AdminProfile = {
  _id: '',
  username: '',
  email: 'admin@example.com',
  pass: 'password123',
  role: 'admin',
};



describe('UserForm コンポーネント', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('初期状態でメールアドレスとパスワードが表示される', () => {
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passInput = screen.getByLabelText(/password/i) as HTMLInputElement;

    expect(emailInput.value).toBe(defaultProfile.email);
    expect(passInput.value).toBe(defaultProfile.pass);
  });

  it('フォーム送信で onSubmit が呼び出される', async () => {
    mockSubmit.mockResolvedValue('OK');

    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(defaultProfile);
      expect(pushMock).toHaveBeenCalledWith('/en'); // 成功したらリダイレクト
    });
  });

  it('ログイン失敗時にはエラーメッセージが表示される', async () => {
    mockSubmit.mockResolvedValue('Invalid credentials');

    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    const errorMessage = await screen.findByText('ログインに失敗しました。');
    expect(errorMessage).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled();
  });

  it('入力フィールドの変更が反映される', () => {
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);

    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'new@example.com' } });
    expect(emailInput.value).toBe('new@example.com');
  });
});
