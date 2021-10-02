class NavMap {
  constructor(private baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  home = () => `${this.baseUrl}/`;

  newGame = () => `${this.baseUrl}/newGame`;

  game = () => `${this.baseUrl}/games/:id`;

  room = (id: string) => `${this.baseUrl}/games/${id}`;

  error = () => `${this.baseUrl}/404`;
}

export const navMap = new NavMap();
