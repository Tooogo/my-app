/**
 * @jest-environment jsdom
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import RootLayout from '@/app/layout';

jest.mock('next-intl/server', () => ({
  getMessages: jest.fn().mockResolvedValue({
    greeting: 'Hello',
  }),
}));

describe('RootLayout', () => {
  it('renders layout with intl context and child content', async () => {
    const params = Promise.resolve({ locale: 'en' });
    const ChildComponent = () => <div data-testid="child">Test Content</div>;

    const layout = await RootLayout({
      children: <ChildComponent />,
      params,
    });

    // ReactNode → HTML文字列に変換（仮想SSR）
    const html = renderToString(layout);

    // 子コンテンツが含まれているか検証
    expect(html).toContain('Test Content');
    expect(html).toContain('antialiased'); // クラスも含まれているか検証
    expect(html).toContain('data-testid="child"');
    expect(html).toContain('data-testid="layout-body"');
  });
});
