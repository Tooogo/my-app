import { ObjectId } from 'mongodb';
import {
  registerUser,
  updateUser,
  registerAdminUser,
  updateAdminUser,
  authenticateUser,
  logoutAdminUser,
} from '../actions/userActions';

import * as services from '../services';
import * as session from '@/lib/session/session';

import { MongoProfile } from '@/app/services/type';
import { AdminProfile } from '@/app/services/AdminUsertypes';

jest.mock('../services', () => ({
  WritingDataToMongoDB: jest.fn(),
  updateUserInMongoDB: jest.fn(),
  RegisterAdminUser: jest.fn(),
  updateAdminInMongoDB: jest.fn(),
  Authenticator: jest.fn(),
}));

jest.mock('@/lib/session/session', () => ({
  deleteSession: jest.fn(),
}));

describe('userAction functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('registerUser calls WritingDataToMongoDB', async () => {
    const mockData: MongoProfile = {
      _id: new ObjectId(),
      name: 'test',
      locale: 'ja',
      hobby: '',
      area: '',
      club: '',
      part_time_job: '',
      self_introduction: [],
    };

    (services.WritingDataToMongoDB as jest.Mock).mockResolvedValue('registered');

    const result = await registerUser(mockData);
    expect(services.WritingDataToMongoDB).toHaveBeenCalledWith(mockData);
    expect(result).toBe('registered');
  });

  it('updateUser calls updateUserInMongoDB', async () => {
    const id = new ObjectId('507f1f77bcf86cd799439011');
    const mockData: MongoProfile = {
      _id: id,
      name: 'updated',
      locale: 'ja',
      hobby: '',
      area: '',
      club: '',
      part_time_job: '',
      self_introduction: [],
    };

    (services.updateUserInMongoDB as jest.Mock).mockResolvedValue('updated');

    const result = await updateUser(id, mockData);
    expect(services.updateUserInMongoDB).toHaveBeenCalledWith(id, mockData);
    expect(result).toBe('updated');
  });

  it('registerAdminUser calls RegisterAdminUser', async () => {
    const mockData: AdminProfile = {
      _id: 'admin1',
      email: 'admin@test.com',
      pass: 'secret',
      username: 'Admin',
      role: 'admin',
    };

    (services.RegisterAdminUser as jest.Mock).mockResolvedValue('adminRegistered');

    const result = await registerAdminUser(mockData);
    expect(services.RegisterAdminUser).toHaveBeenCalledWith(mockData);
    expect(result).toBe('adminRegistered');
  });

  it('updateAdminUser calls updateAdminInMongoDB', async () => {
    const id = 'admin123';
    const mockData: AdminProfile = {
      _id: id,
      email: 'admin2@test.com',
      pass: 'secret2',
      username: 'Admin2',
      role: 'admin',
    };

    (services.updateAdminInMongoDB as jest.Mock).mockResolvedValue('adminUpdated');

    const result = await updateAdminUser(id, mockData);
    expect(services.updateAdminInMongoDB).toHaveBeenCalledWith(id, mockData);
    expect(result).toBe('adminUpdated');
  });

  it('authenticateUser calls Authenticator and returns result', async () => {
    const mockData: AdminProfile = {
      _id: 'admin123',
      email: 'admin@test.com',
      pass: 'secret',
      username: 'Admin',
      role: 'admin',
    };

    (services.Authenticator as jest.Mock).mockResolvedValue({ success: true });

    const result = await authenticateUser(mockData);
    expect(services.Authenticator).toHaveBeenCalledWith(mockData);
    expect(result).toEqual({ success: true });
  });

  it('logoutAdminUser calls deleteSession and returns OK', async () => {
    const result = await logoutAdminUser();
    expect(session.deleteSession).toHaveBeenCalled();
    expect(result).toBe('OK');
  });
});
