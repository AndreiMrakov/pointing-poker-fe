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
