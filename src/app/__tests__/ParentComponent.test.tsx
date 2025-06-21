// __tests__/ParentComponent.test.tsx

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
  _id: 'abc123',
  name: '太郎',
  locale: 'ja',
  hobby: 'サッカー',
  area: '東京',
  club: '科学部',
  part_time_job: 'コンビニ',
  self_introduction: [
    {
      id: 'intro1',
      type: 'text',
      content: 'こんにちは、太郎です。',
    },
  ],
};

const newProfile: MongoProfile = {
  _id: '',
  name: '花子',
  locale: 'ja',
  hobby: '読書',
  area: '大阪',
  club: '美術部',
  part_time_job: 'カフェ',
  self_introduction: [
    {
      id: 'intro1',
      type: 'text',
      content: 'はじめまして、花子です。',
    },
  ],
};

describe('ParentComponent (MongoProfile)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('既存プロファイルがフォームに表示される', () => {
    render(<ParentComponent userData={existingProfile} />);
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    expect(nameInput.value).toBe(existingProfile.name);
  });

  it('_id が存在する場合は updateUser が呼ばれる', async () => {
    render(<ParentComponent userData={existingProfile} />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockUpdate).toHaveBeenCalledWith(existingProfile._id, existingProfile);
      expect(mockRegister).not.toHaveBeenCalled();
    });
  });

  it('_id が空の新規ユーザーは registerUser が呼ばれる', async () => {
    render(<ParentComponent userData={newProfile} />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith(newProfile);
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });

  it('userData が渡されない場合は defaultProfile で registerUser を呼ぶ', async () => {
    render(<ParentComponent />);
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });
});
