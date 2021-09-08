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
  test('Should return axios', () => {
    const axios = httpClient.getAxios();
    expect(axios).not.toBe(undefined);
  });

  test('Should return url', () => {
    const axios = httpClient.getAxios();
    const axiosBaseUrl = axios.defaults.baseURL;
    expect(axiosBaseUrl === '').toBe(true);
  });

  test('Should return false', () => {
    HTTPClient.getInstance('url');
    const axios = httpClient.getAxios();
    const axiosBaseUrl = axios.defaults.baseURL;
    
    expect(axiosBaseUrl === 'url').toBe(false);
  });
});
