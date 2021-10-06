import { CSSProperties } from 'react';
import defaultAvatar from '@/assets/images/default-avatar.svg';

export const getAvatar = (avatar: string): CSSProperties => ({
  backgroundImage: `url(${avatar || defaultAvatar})`,
});
