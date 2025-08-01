// __tests__/RegisterAdminParentComponent.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ParentComponent from '@/app/components/registerAdminComponent';
import { AdminProfile } from '@/app/services/AdminUsertypes';
import { registerAdminUser, updateAdminUser } from '@/app/actions/userActions';

jest.mock('@/app/actions/userActions', () => ({
  registerAdminUser: jest.fn(),
  updateAdminUser: jest.fn(),
}));

const defaultProfile: AdminProfile = {
  _id: 'some-id',
  username: 'adminuser',
  email: 'admin@example.com',
  pass: 'password123',
  role: 'admin',
};

const mockRegister = registerAdminUser as jest.Mock;
mockRegister.mockResolvedValue('OK');
const mockUpdate = updateAdminUser as jest.Mock;


describe('ParentComponent (AdminProfile)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('userData が渡されない場合は registerAdminUser が呼ばれる', async () => {
    render(<ParentComponent />);

    // フォームの必須項目に入力
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'newadmin' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'newadmin@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'securepass123' } });

    // submit ボタンをクリック
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // registerAdminUser が呼ばれたことを検証
    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });


  it('userData が渡された場合は updateAdminUser が呼ばれる', async () => {
    render(<ParentComponent userData={defaultProfile} />);
    fireEvent.click(screen.getByRole('button', { name: /update/i }));


    await waitFor(() => {
      expect(mockUpdate).toHaveBeenCalled();
      expect(mockRegister).not.toHaveBeenCalled();
    });
  });
});
