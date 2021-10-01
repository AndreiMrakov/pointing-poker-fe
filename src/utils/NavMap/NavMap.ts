class NavMap {
  constructor(private baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  home = () => `${this.baseUrl}/`;

  lobby = () => `${this.baseUrl}/new-game`;

  game = () => `${this.baseUrl}/games/:id`;
}

export const navMap = new NavMap();
