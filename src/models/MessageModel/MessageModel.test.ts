import { IMessage } from '@/utils/interfaces';
import { MessageModel } from './MessageModel';

const mockData = { id: 1, name: 'q', text: 'e' };

describe('MessageModel', () => {
  let mockObj: IMessage;
  beforeEach(() => {
    mockObj = new MessageModel({ ...mockData, roomId: '2', roomUserId: 3 });
  });

  test('Should return requred fields', () => {
    expect(mockObj).toEqual({ ...mockData, id: mockData.id.toString() });
  });
});
