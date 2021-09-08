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
  const axios = httpClient.getAxios();

  test('Should return axios', () => {
    expect(axios).not.toBe(undefined);
  });

  test('Should return clean string', () => {
    const axiosBaseUrl = axios.defaults.baseURL;
    expect(axiosBaseUrl === '').toBe(true);
  });

  test('Should return new url', () => {
    const url = 'new url';
    axios.defaults.baseURL = url;
    const axiosBaseUrl = axios.defaults.baseURL
    expect(axiosBaseUrl === url).toBe(true);
  });
});
