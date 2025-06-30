// __tests__/SubmitPage.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SubmitPage from '@/app/[locale]/submit/page';
import { MongoProfile } from '@/app/services/type';
import '@testing-library/jest-dom';
import { ObjectId } from 'mongodb';



// UserForm をモック（onSubmit を呼び出すためのボタンを表示）
jest.mock('@/app/components/UserForm', () => {
  const MockUserForm = (props: {
    data: MongoProfile;
    onSubmit: (profile: MongoProfile) => Promise<void>;
  }) => (
    <div>
      <button
        data-testid="submit-button"
        onClick={() =>
          props.onSubmit({
            _id: undefined as unknown as ObjectId,
            name: 'Test',
            locale: 'en',
            hobby: '',
            area: '',
            club: '',
            part_time_job: '',
            self_introduction: [],
          })
        }
      >
        Submit
      </button>
    </div>
  );
  MockUserForm.displayName = 'MockUserForm';
  return MockUserForm;
});


// グローバルモック
global.fetch = jest.fn();
global.alert = jest.fn();
global.console.error = jest.fn();

describe('SubmitPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('正常に送信できた場合、成功メッセージを表示する', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<SubmitPage />);
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('プロフィールを登録しました');
    });
  });

  it('API が失敗した場合、エラーメッセージを表示する', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    render(<SubmitPage />);
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('登録に失敗しました');
    });
  });

  it('fetch が例外を投げた場合、catch が処理される', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    render(<SubmitPage />);
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(global.console.error).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith('登録に失敗しました');
    });
  });
});
