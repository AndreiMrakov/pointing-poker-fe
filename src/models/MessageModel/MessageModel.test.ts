import { IMessage } from '@/utils/interfaces';
import { MessageModel } from './MessageModel';

const date = new Date();
const mockData = {
  userId: 1, name: 'q', text: 'e', id: 3, date, roomId: '4',
};

describe('MessageModel', () => {
  let mockObj: IMessage;
  beforeEach(() => {
    mockObj = new MessageModel(mockData);
  });

  test('Should return requred fields', () => {
    expect(mockObj).toEqual({
      messageId: '3', userName: 'q', text: 'e', userId: '1',
    });
  });
});
