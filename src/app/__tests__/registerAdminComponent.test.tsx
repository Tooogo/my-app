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
  _id: '',
  username: 'adminuser',
  email: 'admin@example.com',
  pass: 'password123',
  role: 'admin',
};

describe('ParentComponent (AdminProfile)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('userData が渡されない場合は registerAdminUser が呼ばれる', async () => {
    const mockRegister = registerAdminUser as jest.Mock;
    mockRegister.mockResolvedValue('OK');

    render(<ParentComponent />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalled();
      expect(updateAdminUser).not.toHaveBeenCalled();
    });
  });

  it('userData が渡された場合は updateAdminUser が呼ばれる', async () => {
    const mockUpdate = updateAdminUser as jest.Mock;
    mockUpdate.mockResolvedValue('OK');

    render(<ParentComponent userData={{ ...defaultProfile, _id: 'abc123' }} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockUpdate).toHaveBeenCalled();
      expect(registerAdminUser).not.toHaveBeenCalled();
    });
  });
});
