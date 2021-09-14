class NavMap {
  constructor(private baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  home = () => `${this.baseUrl}/`;

  lobby = () => `${this.baseUrl}/lobbies/:id`;

  game = () => `${this.baseUrl}/games/:id`;
}

export const navMap = new NavMap();
