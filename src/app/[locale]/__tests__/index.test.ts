/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  getProfiles,
  getProfileById,
  getProfile,
  getProfileWithNameAndID,
  WritingDataToMongoDB,
  Authenticator,
  RegisterAdminUser,
  getCurrentAdminProfile,
  updateUserInMongoDB,
  updateAdminInMongoDB
} from '@/app/services';
import { ObjectId } from 'mongodb';
import { getSession } from '@/lib/session/getSession';
import { MongoProfile } from '@/app/services/type';

jest.mock('@/lib/session/getSession', () => ({
  __esModule: true,
  getSession: jest.fn(),
}));

jest.mock('@/lib/session/session', () => ({
  __esModule: true,
  createSession: jest.fn(),
}));

const mockCollection = {
  find: jest.fn(),
  findOne: jest.fn(),
  insertOne: jest.fn(),
  updateOne: jest.fn(),
  project: jest.fn(() => ({ toArray: jest.fn() })),
  toArray: jest.fn(),
};

jest.mock('@/lib/mongodb', () => ({
  __esModule: true,
  default: {
    db: jest.fn(() => ({
      collection: jest.fn(() => mockCollection),
    })),
  },
}));

const mockMongoProfile: MongoProfile = {
  _id: new ObjectId(),
  name: 'テストユーザー',
  locale: 'ja',
  hobby: '登山',
  area: '関東',
  club: '自然部',
  part_time_job: 'コンビニ',
  self_introduction: [
    { id: 's1', type: 'text', content: '自己紹介文' },
  ],
};

describe('getProfiles', () => {
  it('正常系: 正常にデータを取得する', async () => {
    const mockData = [{ _id: '507f1f77bcf86cd799439011' as any, name: 'A', locale: 'ja' }];
    mockCollection.find.mockReturnValueOnce({ toArray: jest.fn().mockResolvedValue(mockData) });

    const result = await getProfiles('ja');
    expect(result).toEqual(mockData);
  });
});

describe('getProfileById', () => {
  it('正常系: IDで正しく取得できる', async () => {
    const fakeId = '507f1f77bcf86cd799439012' as any;
    const mockProfile = { _id: fakeId, name: 'X' };
    mockCollection.findOne.mockResolvedValueOnce(mockProfile);

    const result = await getProfileById(fakeId.toString());
    expect(result).toEqual(mockProfile);
  });
});

describe('getProfile', () => {
  it('正常系: ロケールとIDで正しく取得できる', async () => {
    const id = '507f1f77bcf86cd799439013' as any;
    const mockProfiles = [{ _id: id, name: 'Y' }];
    mockCollection.find.mockReturnValueOnce({ toArray: jest.fn().mockResolvedValue(mockProfiles) });

    const result = await getProfile('ja', id.toString());
    expect(result?._id).toEqual(id);
  });
});

describe('getProfileWithNameAndID', () => {
  it('正常系: _idとnameだけ取得する', async () => {
    const expected = [{ _id: '507f1f77bcf86cd799439014' as any, name: 'Name' }];
    mockCollection.find.mockReturnValueOnce({
      project: () => ({ toArray: jest.fn().mockResolvedValue(expected) }),
    });

    const result = await getProfileWithNameAndID('ja');
    expect(result).toEqual(expected);
  });
});

describe('WritingDataToMongoDB', () => {
  it('正常系: データ挿入に成功する', async () => {
    const insertedId = '507f1f77bcf86cd799439015' as any;
    mockCollection.insertOne.mockResolvedValueOnce({ insertedId });

    const result = await WritingDataToMongoDB(mockMongoProfile);
    expect(result.insertedId).toBe(insertedId.toString());
  });
});

describe('Authenticator', () => {
  it('異常系: 存在しないユーザーで失敗', async () => {
    mockCollection.findOne.mockResolvedValueOnce(null);

    const result = await Authenticator({
      _id: '',
      username: '',
      email: 'x@x.com',
      pass: 'a',
      role: 'admin',
    });
    expect(result).toBe('Invalid credentials');
  });
});

describe('RegisterAdminUser', () => {
  it('正常系: 新規登録に成功', async () => {
    mockCollection.findOne.mockResolvedValueOnce(null);
    const insertedId = '507f1f77bcf86cd799439016' as any;
    mockCollection.insertOne.mockResolvedValueOnce({ insertedId });

    const result = await RegisterAdminUser({
      _id: '',
      username: 'U',
      email: 'u@u.com',
      pass: 'p',
      role: 'admin',
    });
    expect(result.insertedId).toBe(insertedId.toString());
  });
});

describe('getCurrentAdminProfile', () => {
  it('正常系: セッションから管理者情報を取得', async () => {
    const mockSession = { userId: '507f1f77bcf86cd799439017' };
    const mockUser = {
      _id: '507f1f77bcf86cd799439017' as any,
      username: 'a',
      email: 'e',
      pass: 'p',
    };

    (getSession as jest.Mock).mockResolvedValueOnce(mockSession);
    mockCollection.findOne.mockResolvedValueOnce(mockUser);

    const result = await getCurrentAdminProfile();
    expect(result?.email).toBe('e');
  });
});

describe('updateUserInMongoDB', () => {
  it('正常系: ユーザー更新成功', async () => {
    mockCollection.updateOne.mockResolvedValueOnce({ modifiedCount: 1 });

    const { _id, ...data } = mockMongoProfile;

    const result = await updateUserInMongoDB(_id as any, data);
    expect(result.modifiedCount).toBe(1);
  });
});

describe('updateAdminInMongoDB', () => {
  it('正常系: 管理者情報の更新成功', async () => {
    const id = '507f1f77bcf86cd799439018';
    const adminProfile = {
      _id: id,
      username: 'admin',
      email: 'admin@example.com',
      pass: 'hashedpass',
      role: 'admin' as const,
    };

    mockCollection.updateOne.mockResolvedValueOnce({ modifiedCount: 1 });

    const result = await updateAdminInMongoDB(id, adminProfile);
    expect(result.modifiedCount).toBe(1);
  });
});


