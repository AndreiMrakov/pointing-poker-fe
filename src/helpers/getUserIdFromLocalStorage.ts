export function getUserIdFromLocalStorage(): string | false {
  return localStorage.getItem('userId') || false;
}
