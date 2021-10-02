class NavMap {
  constructor(private baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  home = () => `${this.baseUrl}/`;

  lobby = () => `${this.baseUrl}/newGame`;

  game = () => `${this.baseUrl}/games/:id`;
}

export const navMap = new NavMap();
