import { httpClient, HTTPClient } from './HttpClient';

describe('Create class', () => {
  test('Should be created', () => {
    expect(httpClient).not.toBe(undefined);
  });

  test('Should be one class', () => {
    const httpClientDouble = HTTPClient.getInstance();
    expect(httpClient === httpClientDouble).toBe(true);
  });
});

describe('Base url', () => {
  test('Should return url', () => {
    expect(httpClient.http.defaults.baseURL === process.env.REACT_BASE_URL).toBe(true);
    httpClient.url = 'url';

    expect(httpClient.http.defaults.baseURL === 'url').toBe(true);
  });
});
