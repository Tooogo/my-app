// __tests__/userAction.test.ts

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
    const mockData = { name: 'test' };
    (services.WritingDataToMongoDB as jest.Mock).mockResolvedValue('registered');

    const result = await registerUser(mockData as any);
    expect(services.WritingDataToMongoDB).toHaveBeenCalledWith(mockData);
    expect(result).toBe('registered');
  });

  it('updateUser calls updateUserInMongoDB', async () => {
    const id = new ObjectId('507f1f77bcf86cd799439011');
    const mockData = { name: 'updated' };
    (services.updateUserInMongoDB as jest.Mock).mockResolvedValue('updated');

    const result = await updateUser(id, mockData as any);
    expect(services.updateUserInMongoDB).toHaveBeenCalledWith(id, mockData);
    expect(result).toBe('updated');
  });

  it('registerAdminUser calls RegisterAdminUser', async () => {
    const mockData = { email: 'admin@test.com' };
    (services.RegisterAdminUser as jest.Mock).mockResolvedValue('adminRegistered');

    const result = await registerAdminUser(mockData as any);
    expect(services.RegisterAdminUser).toHaveBeenCalledWith(mockData);
    expect(result).toBe('adminRegistered');
  });

  it('updateAdminUser calls updateAdminInMongoDB', async () => {
    const id = 'admin123';
    const mockData = { email: 'admin2@test.com' };
    (services.updateAdminInMongoDB as jest.Mock).mockResolvedValue('adminUpdated');

    const result = await updateAdminUser(id, mockData as any);
    expect(services.updateAdminInMongoDB).toHaveBeenCalledWith(id, mockData);
    expect(result).toBe('adminUpdated');
  });

  it('authenticateUser calls Authenticator and returns result', async () => {
    const mockData = { email: 'admin@test.com' };
    (services.Authenticator as jest.Mock).mockResolvedValue({ success: true });

    const result = await authenticateUser(mockData as any);
    expect(services.Authenticator).toHaveBeenCalledWith(mockData);
    expect(result).toEqual({ success: true });
  });

  it('logoutAdminUser calls deleteSession and returns OK', async () => {
    const result = await logoutAdminUser();
    expect(session.deleteSession).toHaveBeenCalled();
    expect(result).toBe('OK');
  });
});
