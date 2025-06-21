import { render, screen } from '@testing-library/react';
import FamilyMember from '@/app/[locale]/page';
import '@testing-library/jest-dom';

// モックデータ
const mockProfile = {
  _id: '123',
  name: 'テストユーザー',
  hobby: '読書',
  area: '東京',
  club: '写真部',
  part_time_job: 'カフェ店員',
  self_introduction: [
    { id: '1', type: 'h1', content: 'はじめに' },
    { id: '2', type: 'h2', content: '背景' },
    { id: '3', type: 'h3', content: '詳細' }
  ]
};

// `getProfileById` と `getTranslations` をモック
jest.mock('@/app/services', () => ({
  getProfileById: jest.fn().mockImplementation((id: string) => {
    if (id === 'missing') return null;
    return mockProfile;
  }),
}));

jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn().mockResolvedValue((key: string) => {
    const translations: Record<string, string> = {
      selfIntroduction: '自己紹介',
      name: '名前',
      hobby: '趣味',
      area: '地域',
      club: '部活動',
      partTimeJob: 'アルバイト',
      profileNotFound: 'プロフィールが見つかりません'
    };
    return translations[key] || key;
  }),
}));

describe('FamilyMember コンポーネント', () => {
  it('プロフィールを正しく表示する', async () => {
    render(await FamilyMember());

    expect(screen.getByText('自己紹介')).toBeInTheDocument();
    expect(screen.getByText('名前: テストユーザー')).toBeInTheDocument();
    expect(screen.getByText('趣味: 読書')).toBeInTheDocument();
    expect(screen.getByText('地域: 東京')).toBeInTheDocument();
    expect(screen.getByText('部活動: 写真部')).toBeInTheDocument();
    expect(screen.getByText('アルバイト: カフェ店員')).toBeInTheDocument();

    // 自己紹介の見出しと内容も確認
    expect(screen.getByText('2. はじめに')).toBeInTheDocument();
    expect(screen.getByText('2.1 背景')).toBeInTheDocument();
    expect(screen.getByText('詳細')).toBeInTheDocument();
  });

  it('プロフィールが存在しない場合はエラーメッセージを表示', async () => {
    render(await FamilyMember());

    expect(screen.getByText('プロフィールが見つかりません')).toBeInTheDocument();
  });
});
