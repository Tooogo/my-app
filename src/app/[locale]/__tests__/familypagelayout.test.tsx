// __tests__/RootLayout.test.tsx
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/[locale]/family/[id]/layout';
import { getProfileWithNameAndID } from '@/app/services';

jest.mock('@/app/services', () => ({
  getProfileWithNameAndID: jest.fn(),
}));

describe('RootLayout', () => {
  const mockProfiles = [
    { _id: '1', name: 'Alice' },
    { _id: '2', name: 'Bob' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (getProfileWithNameAndID as jest.Mock).mockResolvedValue(mockProfiles);
  });

  it('renders navigation links and children correctly', async () => {
    const params = { locale: 'en', id: '1' };

    // children をダミーとして渡す
    const children = <div>Test Child</div>;

    // SSR/async component のため await 必須
    render(await RootLayout({ children, params }));

    // ナビゲーションリンクが表示されているか確認
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();

    // children が表示されるか
    expect(screen.getByText('Test Child')).toBeInTheDocument();

    // 関数が正しく呼ばれたか
    expect(getProfileWithNameAndID).toHaveBeenCalledWith('en');
  });
});
