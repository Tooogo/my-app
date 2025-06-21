// __tests__/MongoUserForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserForm from '@/app/components/UserForm';
import type { MongoProfile } from '@/app/services/type';

describe('UserForm (MongoProfile)', () => {
  const mockSubmit = jest.fn();

  const defaultProfile: MongoProfile = {
    _id: '',
    name: '',
    locale: 'en',
    hobby: '',
    area: '',
    club: '',
    part_time_job: '',
    self_introduction: [],
  };

  const editProfile: MongoProfile = {
    _id: '123abc',
    name: 'Test User',
    locale: 'ja',
    hobby: 'Reading',
    area: 'Tokyo',
    club: 'Science Club',
    part_time_job: 'Cafe',
    self_introduction: [],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('登録モードでは "User Registration" ヘッダーが表示される', () => {
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);
    expect(screen.getByText('User Registration')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
  });

  it('編集モードでは "Edit Profile" ヘッダーが表示される', () => {
    render(<UserForm data={editProfile} onSubmit={mockSubmit} />);
    expect(screen.getByText('Edit Profile')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Update' })).toBeInTheDocument();
  });

  it('フォーム入力が反映される', () => {
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Taro' } });
    expect(nameInput.value).toBe('Taro');
  });

  it('登録モードで onSubmit が正しく呼び出される', async () => {
    mockSubmit.mockResolvedValue(undefined);
    render(<UserForm data={defaultProfile} onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Hanako' } });
    fireEvent.change(screen.getByLabelText(/hobby/i), { target: { value: 'Piano' } });
    fireEvent.change(screen.getByLabelText(/area/i), { target: { value: 'Kyoto' } });
    fireEvent.change(screen.getByLabelText(/club/i), { target: { value: 'Music Club' } });
    fireEvent.change(screen.getByLabelText(/part-time job/i), { target: { value: 'Library' } });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Hanako',
          hobby: 'Piano',
          area: 'Kyoto',
          club: 'Music Club',
          part_time_job: 'Library',
        })
      );
    });
  });

  it('編集モードで onSubmit が正しく呼び出される', async () => {
    mockSubmit.mockResolvedValue(undefined);
    render(<UserForm data={editProfile} onSubmit={mockSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: /update/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(editProfile);
    });
  });
});
