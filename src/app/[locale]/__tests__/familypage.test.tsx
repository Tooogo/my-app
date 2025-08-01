// __tests__/FamilyMember.test.tsx
import { render, screen } from '@testing-library/react';
import FamilyMember from '@/app/[locale]/family/[id]/page';
import { getProfileById } from '@/app/services';
import { getTranslations } from 'next-intl/server';

jest.mock('@/app/services', () => ({
  getProfileById: jest.fn(),
}));

jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn(),
}));

describe('FamilyMember page', () => {
  const mockParams = { id: 'user123', locale: 'en' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders profile when data is found', async () => {
    (getTranslations as jest.Mock).mockResolvedValue((key: string) => key);
    (getProfileById as jest.Mock).mockResolvedValue({
      name: 'John Doe',
      hobby: 'Reading',
      area: 'Tokyo',
      club: 'Tennis',
      part_time_job: 'Cafe',
      self_introduction: [
        { id: '1', type: 'h2', content: 'About me' },
        { id: '2', type: 'h3', content: 'I love programming.' },
      ],
    });

    render(await FamilyMember({ params: mockParams }));

    expect(screen.getByText('selfIntroduction')).toBeInTheDocument();
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Reading/)).toBeInTheDocument();
    expect(screen.getByText(/About me/)).toBeInTheDocument();
  });

  it('renders not found message when profile is missing', async () => {
    (getTranslations as jest.Mock).mockResolvedValue((key: string) => key);
    (getProfileById as jest.Mock).mockResolvedValue(null);

    render(await FamilyMember({ params: mockParams }));

    expect(screen.getByText('profileNotFound')).toBeInTheDocument();
  });
});
