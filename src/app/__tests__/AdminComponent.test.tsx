import { render, screen, fireEvent } from '@testing-library/react';
import AdminComponent from '@/app/components/AdminComponent';
import { authenticateUser } from '@/app/actions/userActions';
import type { AdminProfile } from '@/app/services/AdminUsertypes';


jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('@/app/actions/userActions', () => ({
  authenticateUser: jest.fn(),
}));

const mockProfile: AdminProfile = {
  _id: 'abc123',
  username: 'adminuser',
  email: 'admin@example.com',
  pass: 'password123',
  role: 'admin',
};

describe('AdminComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default profile when no props provided', () => {
    render(<AdminComponent />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('renders with passed userData', () => {
    render(<AdminComponent userData={mockProfile} />);
    const emailField = screen.getByLabelText(/email/i) as HTMLInputElement;
    expect(emailField.value).toBe(mockProfile.email);
  });

  it('calls authenticateUser on submit', async () => {
    const mockFn = authenticateUser as jest.Mock;
    mockFn.mockResolvedValue("OK");

    render(<AdminComponent userData={mockProfile} />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockFn).toHaveBeenCalledWith(mockProfile);
  });
});
