import { httpClient } from '@/api/HttpClient';
import { MessageModel } from '@/models/MessageModel';
import { AppDispatch } from '@/store';
import { messageActions } from '@/store/actions';
import { IMessageFromBE } from '@/utils/interfaces';

export function getMessagesByRoomId(roomId: string) {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const messagesFromBE: IMessageFromBE[] = await httpClient.http.get(`/api/messages?roomId=${roomId}`);
      const messages = messagesFromBE.map((msg) => new MessageModel(msg));
      dispatch(messageActions.getMessages(messages));
    } catch (err) {
      console.log(err);
    }
  };
}
