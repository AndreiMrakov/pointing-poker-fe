import { IUser } from '@/utils/interfaces';
import { UserModel } from './UserModel';

const mockData = { id: '1', name: 'q', room: 'e' };

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
