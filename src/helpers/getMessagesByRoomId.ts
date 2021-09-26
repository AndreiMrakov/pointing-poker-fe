import { httpClient } from '@/api/HttpClient';
import { MessageModel } from '@/models/MessageModel';
import { useAppDispatch } from '@/store';
import { getMessages } from '@/store/actions/messageActions';
import { IMessage } from '@/utils/interfaces';

export async function getMessagesByRoomId(roomId: string): Promise<void> {
  const messagesFromBE: IMessage[] = await httpClient.http.get(`/api/messages?roomId=${roomId}`);
  const messages = messagesFromBE.map((msg) => new MessageModel(msg));
  const dispatch = useAppDispatch();
  dispatch(getMessages(messages));
}
