export function getRoomIdByUrl(): string {
  const path = window.location.pathname;
  const directories = path.split('/');
  return directories[(directories.length - 1)];
}
