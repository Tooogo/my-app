/* eslint-disable @typescript-eslint/no-explicit-any */

import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/app/[locale]/family/[id]/edit/page'; // ルート構成によって変える
import { getProfileById } from '@/app/services';
import { MongoProfile } from '@/app/services/type';

// getProfileByIdをモック
jest.mock('@/app/services', () => ({
  getProfileById: jest.fn(),
}));

// ParentComponentをモック（中身に依存しない）
jest.mock('@/app/components/ParentComponent', () => ({
  __esModule: true,
  default: () => <div>Mocked ParentComponent</div>,
}));

const fakeObjectId = '507f1f77bcf86cd799439011';

describe('HomePage (by ID)', () => {
  const mockProfile: MongoProfile = {
    _id: fakeObjectId as any,
    name: 'Taro',
    locale: 'ja',
    hobby: 'baseball',
    area: 'Tokyo',
    club: 'tennis',
    part_time_job: 'waiter',
    self_introduction: [
      {
        id: 'intro1',
        type: 'text',
        content: 'Hello',
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('プロファイルが存在する場合 ParentComponent を表示する', async () => {
    (getProfileById as jest.Mock).mockResolvedValue(mockProfile);

    const props = {
      params: Promise.resolve({ id: 'abc123', locale: 'ja' })
     };
    render(await HomePage(props));

    await waitFor(() => {
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByText('Mocked ParentComponent')).toBeInTheDocument();
    });
  });

  it('プロファイルが存在しない場合 "Profile not found" を表示する', async () => {
    (getProfileById as jest.Mock).mockResolvedValue(null);

    const props = {
      params: Promise.resolve({ id: 'unknown', locale: "ja" })
     };
    render(await HomePage(props));

    await waitFor(() => {
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByText('Profile not found')).toBeInTheDocument();
    });
  });
});
