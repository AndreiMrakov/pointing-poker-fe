export function getRoomPathFromLink(link: string): string {
  const directories = link.split('/');
  const url = directories.slice(directories.indexOf('games'), directories.length).join('/');
  return url;
}
