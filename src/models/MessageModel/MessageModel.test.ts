import { IMessage } from '@/utils/interfaces';
import { MessageModel } from './MessageModel';

const mockData = { id: 1, userName: 'q', message: 'e' };

describe('MessageModel', () => {
  let mockObj: IMessage;
  beforeEach(() => {
    mockObj = new MessageModel(mockData);
  });

  test('Should return requred fields', () => {
    expect(mockObj).toEqual(mockData);
  });
});
