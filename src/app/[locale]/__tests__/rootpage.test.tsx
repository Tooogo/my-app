// src/app/[locale]/__tests__/page.test.tsx

import { render, screen } from '@testing-library/react';
import Home from '../page'; // 相対パスでのインポート

describe('Home コンポーネント', () => {
  it('正しく静的なテキストを表示する', () => {
    render(<Home />);

    expect(
      screen.getByText('Please access each site from the button on the top left')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Or, if you haven't registered yet, please click the registration button on the rop right"
      )
    ).toBeInTheDocument();
  });
});
