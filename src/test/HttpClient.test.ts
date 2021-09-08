import { httpClient } from '../api/HttpClient';
import { HTTPClient } from '../api/HttpClient';

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
    expect(httpClient.http === '').toBe(true);
    httpClient.http = 'url';
    
    expect(httpClient.http === 'url').toBe(true);
  });
});
