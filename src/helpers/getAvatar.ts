import defaultAvatar from '@/assets/images/default-avatar.svg';

export const getAvatar = (avatar: string) => {
  const avatarUser = avatar ? avatar : defaultAvatar;

  return {
    backgroundImage: `url(${avatarUser})`,
  };
};
