import { IUser } from '@/utils/interfaces';
import { UserModel } from './UserModel';

const mockData = { name: 'q', id: 1 };

describe('UserModel', () => {
  let mockObj: IUser;
  beforeEach(() => {
    mockObj = new UserModel(mockData);
  });

  test('Should return requred fields', () => {
    expect(mockObj).toEqual({ name: 'q', userId: '1', role: 'spectator' });
  });

  test('Should return optional fields', () => {
    mockObj.role = 'member';
    mockObj.score = '33';
    expect(mockObj).toEqual({
      name: 'q', userId: '1', role: 'member', score: '33',
    });
  });
});
