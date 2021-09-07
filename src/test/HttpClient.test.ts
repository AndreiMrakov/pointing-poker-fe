import { _HTTPClient } from '../api/HttpClient';

interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string
};

describe('Create class', () => {
  const httpClient = _HTTPClient.getInstance();

  test('Should be created', () => {
    expect(httpClient).not.toBe(undefined);
  });
  
  test('Should be one class', () => {
    const httpClientDouble = _HTTPClient.getInstance();
    expect(httpClient === httpClientDouble).toBe(true);
  });
});

describe('Response', () => {
  class Axios extends _HTTPClient {
    super () {};

    getPosts = (url: string) => this._axios.get<IPost[]>(`${url}/posts`);
  };

  test('Should get posts', async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';
    const axios = new Axios();
    const posts = await axios.getPosts(baseURL);

    expect((posts as unknown as IPost[]).length).toBe(100);
  });

  test('Should get undefined and error from console', async () => {
    const baseURL = 'error';
    const consoleSpy = jest.spyOn(console, 'dir');
    
    const axios = new Axios();
    const posts = await axios.getPosts(baseURL);

    expect(posts).toBe(undefined);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
