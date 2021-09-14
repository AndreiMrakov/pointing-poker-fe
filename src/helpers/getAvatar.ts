import defaultAvatar from '@/assets/images/default-avatar.svg';

export const getAvatar = (avatar: string) => ({
  backgroundImage: `url(${avatar || defaultAvatar})`,
});
