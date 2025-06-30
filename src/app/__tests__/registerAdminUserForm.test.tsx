// __tests__/AdminUserForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserForm from '@/app/components/registerAdminUserform';
import { AdminProfile } from '@/app/services/AdminUsertypes';

describe('UserForm (AdminProfile)', () => {
  const mockSubmit = jest.fn();

  const defaultProfile: AdminProfile = {
    _id: '',
    username: '',
    email: '',
    pass: '',
    role: 'admin',
  };

  const editProfile: AdminProfile = {
    _id: 'abc123',
    username: 'adminuser',
    email: 'admin@example.com',
    pass: 'securepass',
    role: 'admin',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('登録フォームモードで初期表示される', () => {
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);
    expect(screen.getByText('Admin Registration')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
  });

  it('編集モードで初期表示される', () => {
    render(<UserForm data={editProfile} onSubmit={mockSubmit} />);
    expect(screen.getByText('Edit Admin Profile')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Update' })).toBeInTheDocument();
  });

  it('フォーム入力が反映される', () => {
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);
    const usernameInput = screen.getByLabelText(/username/i);
    fireEvent.change(usernameInput, { target: { value: 'newuser' } });
    expect((usernameInput as HTMLInputElement).value).toBe('newuser');
  });

  it('フォーム送信時に onSubmit が呼び出される', async () => {
    mockSubmit.mockResolvedValue(undefined);

    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'adminuser' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'pass1234' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit).toHaveBeenCalledWith({
        _id: '',
        username: 'adminuser',
        email: 'admin@example.com',
        pass: 'pass1234',
        role: 'admin',
      });
    });
  });
});
