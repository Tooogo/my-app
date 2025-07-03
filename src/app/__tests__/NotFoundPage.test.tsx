import { render, screen } from '@testing-library/react';
import NotFoundPage from '@/app/not-found/page'; // 実際のパスに合わせて調整
import '@testing-library/jest-dom';

describe('NotFoundPage コンポーネント', () => {
  it('404エラーメッセージと説明が表示される', () => {
    render(<NotFoundPage />);

    // タイトルが表示されているか
    expect(screen.getByRole('heading', { name: /404 not found error/i })).toBeInTheDocument();

    // 日本語の説明が表示されているか
    expect(
      screen.getByText(
        /申し訳ありませんが、リクエストされたページは存在しないか、アクセス権限がありません。/
      )
    ).toBeInTheDocument();
  });
});
