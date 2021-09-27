import { useSelector } from 'react-redux';
import { roomMembersSelector } from '@/store/selectors';
import { IMessageFromBE } from '@/utils/interfaces';
import { MessageModel } from '@/models/MessageModel';

export function getMessageByMessageFromBE(message: IMessageFromBE): MessageModel {
  const roomUsers = useSelector(roomMembersSelector.roomMembers);

  const { name } = roomUsers.find((usr) => usr.userId === message.userId.toString())!;

  return new MessageModel({ ...message, name });
}
