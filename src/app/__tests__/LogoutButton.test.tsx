import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LogoutButton from '@/app/components/LogoutButton';
import { logoutAdminUser } from '@/app/actions/userActions';

// useRouter の push と refresh をモック
const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

jest.mock('@/app/actions/userActions', () => ({
  logoutAdminUser: jest.fn(),
}));

describe('LogoutButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('ログアウト成功時にアラートを表示してリダイレクトとリフレッシュを行う', async () => {
    // logoutAdminUser を成功としてモック
    (logoutAdminUser as jest.Mock).mockResolvedValue('OK');

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<LogoutButton />);

    fireEvent.click(screen.getByRole('button', { name: /logout/i }));

    await waitFor(() => {
      expect(logoutAdminUser).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith('ログアウトされました');
      expect(pushMock).toHaveBeenCalledWith('/en');
    });

    alertMock.mockRestore();
  });

  it('ログアウト失敗時に失敗のアラートを表示', async () => {
    (logoutAdminUser as jest.Mock).mockResolvedValue('ERROR');

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<LogoutButton />);
    fireEvent.click(screen.getByRole('button', { name: /logout/i }));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('ログアウトに失敗しました');
      expect(pushMock).not.toHaveBeenCalled();
    });

    alertMock.mockRestore();
  });

  it('エラー発生時にエラーメッセージを表示し、refresh を呼ぶ', async () => {
    (logoutAdminUser as jest.Mock).mockRejectedValue(new Error('Network error'));

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const errorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<LogoutButton />);
    fireEvent.click(screen.getByRole('button', { name: /logout/i }));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('エラーが発生しました');
      expect(console.error).toHaveBeenCalled();
    });

    alertMock.mockRestore();
    errorMock.mockRestore();
  });
});
