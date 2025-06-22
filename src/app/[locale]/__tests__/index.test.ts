import { Authenticator, RegisterAdminUser } from '@/app/services';
import { ObjectId } from 'mongodb';
import argon2 from 'argon2';

// モック：Mongoクライアントとコレクション
jest.mock('@/lib/mongodb', () => ({
  default: {
    db: () => ({
      collection: jest.fn(() => mockCollection)
    }),
  },
}));

// モック：セッション関連
jest.mock('@/lib/session/session', () => ({
  createSession: jest.fn(),
}));

jest.mock('@/lib/session/getSession', () => ({
  getSession: jest.fn(),
}));

const mockCollection = {
  findOne: jest.fn(),
  insertOne: jest.fn(),
};

describe('Authenticator', () => {
  const email = 'admin@example.com';
  const plainPassword = 'password123';
  let hashedPassword: string;

  beforeAll(async () => {
    hashedPassword = await argon2.hash(plainPassword);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns OK for valid credentials', async () => {
    mockCollection.findOne.mockResolvedValueOnce({
      _id: new ObjectId(),
      email,
      pass: hashedPassword,
      role: 'admin',
    });

    const result = await Authenticator({
      _id: 'dummyid',
      username: 'admin',
      email,
      pass: plainPassword,
      role: 'admin',
    });

    expect(result).toBe('OK');
  });

  it('returns Invalid credentials for nonexistent user', async () => {
    mockCollection.findOne.mockResolvedValueOnce(null);

    const result = await Authenticator({
      _id: 'dummyid',
      username: 'admin',
      email,
      pass: plainPassword,
      role: 'admin',
    });

    expect(result).toBe('Invalid credentials');
  });

  it('returns Invalid credentials for incorrect password', async () => {
    mockCollection.findOne.mockResolvedValueOnce({
      _id: new ObjectId(),
      email,
      pass: await argon2.hash('wrongPassword'),
    });

    const result = await Authenticator({
      _id: 'dummyid',
      username: 'admin',
      email,
      pass: 'bad-password',
      role: 'admin',
    });

    expect(result).toBe('Invalid credentials');
  });
});

describe('RegisterAdminUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('registers a new admin user', async () => {
    mockCollection.findOne.mockResolvedValueOnce(null); // email重複なし
    mockCollection.insertOne.mockResolvedValueOnce({ insertedId: new ObjectId('507f1f77bcf86cd799439011') });

    const result = await RegisterAdminUser({
      _id: '',
      username: 'admin',
      email: 'newadmin@example.com',
      pass: 'new-password',
      role: 'admin',
    });

    expect(result.insertedId).toBe('507f1f77bcf86cd799439011');
  });

  it('throws error for duplicate email', async () => {
    mockCollection.findOne.mockResolvedValueOnce({ email: 'duplicate@example.com' });

    await expect(RegisterAdminUser({
      _id: '',
      username: 'admin',
      email: 'duplicate@example.com',
      pass: 'new-password',
      role: 'admin',
    })).rejects.toThrow('このメールアドレスは既に登録されています');
  });
});
