// __tests__/HomePage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/app/[locale]/mypage/page';
import { getCurrentAdminProfile } from '@/app/services';
import { AdminProfile } from '@/app/services/AdminUsertypes';

jest.mock('@/app/services', () => ({
  getCurrentAdminProfile: jest.fn(),
}));

jest.mock('@/app/components/registerAdminComponent', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked ParentComponent</div>),
}));

describe('HomePage', () => {
  const mockProfile: AdminProfile = {
    _id: 'admin123',
    username: 'testadmin',
    email: 'admin@example.com',
    pass: 'password',
    role: 'admin',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('プロファイルがある場合 ParentComponent を表示する', async () => {
    (getCurrentAdminProfile as jest.Mock).mockResolvedValue(mockProfile);

    render(await HomePage());

    await waitFor(() => {
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByText('Mocked ParentComponent')).toBeInTheDocument();
    });
  });

  it('プロファイルがない場合 "Profile not found" を表示する', async () => {
    (getCurrentAdminProfile as jest.Mock).mockResolvedValue(null);

    render(await HomePage());

    await waitFor(() => {
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByText('Profile not found')).toBeInTheDocument();
    });
  });
});
