class NavMap {
  constructor(private baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  home = () => `${this.baseUrl}/`;

  newGame = () => `${this.baseUrl}/newGame`;

  game = (id?: string) => {
    if (id) {
      return `${this.baseUrl}/games/${id}`;
    }
    return `${this.baseUrl}/games/:id`;
  };

  error = () => `${this.baseUrl}/404`;
}

export const navMap = new NavMap();
