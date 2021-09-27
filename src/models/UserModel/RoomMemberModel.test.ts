import { IRoomMember } from '@/utils/interfaces';
import { RoomMemberModel } from './RoomMemberModel';

const mockData = { name: 'q', id: '1' };

describe('UserModel', () => {
  let mockObj: IRoomMember;
  beforeEach(() => {
    mockObj = new RoomMemberModel(mockData);
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
