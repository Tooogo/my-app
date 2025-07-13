/* eslint-disable @typescript-eslint/no-explicit-any */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ParentComponent from '@/app/components/ParentComponent';
import { registerUser, updateUser } from '@/app/actions/userActions';
import type { MongoProfile } from '@/app/services/type';

jest.mock('@/app/actions/userActions', () => ({
  registerUser: jest.fn(),
  updateUser: jest.fn(),
}));

const mockRegister = registerUser as jest.Mock;
const mockUpdate = updateUser as jest.Mock;

const existingProfile: MongoProfile = {
  _id: '507f1f77bcf86cd799439011' as any,
  name: '太郎',
  locale: 'ja',
  hobby: 'サッカー',
  area: '東京',
  club: '科学部',
  part_time_job: 'コンビニ',
  self_introduction: [],
};

describe('ParentComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('既存プロファイルが表示され、Update ボタンが機能する', async () => {
    render(<ParentComponent userData={existingProfile} />);

    expect(screen.getByLabelText(/Name/i)).toHaveValue('太郎');

    fireEvent.click(screen.getByRole('button', { name: /update/i }));

    await waitFor(() => {
      expect(mockUpdate).toHaveBeenCalledWith(existingProfile._id, existingProfile);
      expect(mockRegister).not.toHaveBeenCalled();
    });
  });

  it('新規プロファイルでは Register ボタンが機能する', async () => {
    const newProfile = { ...existingProfile, _id: '' as unknown as any, name: '花子' };
    render(<ParentComponent userData={newProfile} />);

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith(newProfile);
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });
});
