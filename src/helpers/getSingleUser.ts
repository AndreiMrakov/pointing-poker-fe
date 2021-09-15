export class SingleUser {
  id: string;

  name: string;

  role: string;

  surname: string;

  job: string;

  avatar: string;

  currentScore: string;

  isCardOpened: boolean;

  constructor(id: string) {
    this.id = id;
    this.name = `User${id.slice(0, 3)}`;
    this.role = 'member';
    this.surname = '';
    this.job = '';
    this.avatar = '';
    this.currentScore = '';
    this.isCardOpened = false;
  }
}
