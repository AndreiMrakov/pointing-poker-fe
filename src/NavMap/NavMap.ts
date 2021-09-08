export class NavMap {
  constructor (private baseUrl = '') {}

  home = () => `${this.baseUrl}/`;
  lobby = () => `${this.baseUrl}/lobby/:id`;
  game = () => `${this.baseUrl}/game/:id`;
};
