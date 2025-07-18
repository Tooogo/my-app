// src/app/__tests__/RootPage.test.tsx

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import RootPage from '@/app/page';

jest.mock('next/headers', () => ({
  headers: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('<RootPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('ja を含む accept-language に対して /ja にリダイレクトされる', async () => {
    (headers as jest.Mock).mockResolvedValue({
      get: () => 'ja,en-US;q=0.9,en;q=0.8',
    });

    await RootPage();

    expect(redirect).toHaveBeenCalledWith('/ja');
  });

  it('en を含む accept-language に対して /en にリダイレクトされる', async () => {
    (headers as jest.Mock).mockResolvedValue({
      get: () => 'en-US,en;q=0.9',
    });

    await RootPage();

    expect(redirect).toHaveBeenCalledWith('/en');
  });

  it('未対応言語（frなど）では /ja にリダイレクトされる', async () => {
    (headers as jest.Mock).mockResolvedValue({
      get: () => 'fr-FR,fr;q=0.9',
    });

    await RootPage();

    expect(redirect).toHaveBeenCalledWith('/ja');
  });

  it('accept-language が null の場合も /ja にリダイレクトされる', async () => {
    (headers as jest.Mock).mockResolvedValue({
      get: () => null,
    });

    await RootPage();

    expect(redirect).toHaveBeenCalledWith('/ja');
  });
});
