import { IUser } from '@/utils/interfaces';
import { UserModel } from './UserModel';

const mockData = { name: 'q', userId: '1' };

describe('UserModel', () => {
  let mockObj: IUser;
  beforeEach(() => {
    mockObj = new UserModel(mockData);
  });

  test('Should return requred fields', () => {
    expect(mockObj).toEqual(mockData);
  });

  test('Should return optional fields', () => {
    mockObj.role = 'qwe';
    mockObj.score = '33';
    expect(mockObj).toEqual({
      ...mockData, role: 'qwe', score: '33',
    });
  });
});
