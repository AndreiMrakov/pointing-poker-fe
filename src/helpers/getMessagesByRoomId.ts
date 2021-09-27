import { httpClient } from '@/api/HttpClient';
import { AppDispatch } from '@/store';
import { messageActions } from '@/store/actions';
import { IMessageFromBE } from '@/utils/interfaces';
import { getMessageByMessageFromBE } from './getMessageByMessageFromBE';

export function getMessagesByRoomId(roomId: string) {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const messagesFromBE: IMessageFromBE[] = await httpClient.http.get(`/api/messages?roomId=${roomId}`);
      const messages = messagesFromBE.map((msg) => getMessageByMessageFromBE(msg));
      dispatch(messageActions.getMessages(messages));
    } catch (err) {
      console.log(err);
    }
  };
}
