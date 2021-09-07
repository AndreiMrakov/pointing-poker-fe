import defaultAvatar from '@/assets/images/default-avatar.svg';

export const getAvatar = (avatar = defaultAvatar) => ({
  backgroundImage: `url(${avatar})`
});
