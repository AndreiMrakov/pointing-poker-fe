import { IMessage } from '@/utils/interfaces';
import { MessageModel } from './MessageModel';

const mockData = {
  userId: 1, userName: 'q', text: 'e', messageId: 3,
};

describe('MessageModel', () => {
  let mockObj: IMessage;
  beforeEach(() => {
    mockObj = new MessageModel(mockData);
  });

  test('Should return requred fields', () => {
    // eslint-disable-next-line max-len
    expect(mockObj).toEqual({ ...mockData, userId: mockData.userId.toString(), messageId: mockData.messageId.toString() });
  });
});
