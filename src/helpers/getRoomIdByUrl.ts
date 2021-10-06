export function getRoomIdByUrl(link?: string): string {
  let directories;
  if (link) {
    directories = link.split('/');
  } else {
    const path = window.location.pathname;
    directories = path.split('/');
  }

  return directories[(directories.length - 1)];
}
