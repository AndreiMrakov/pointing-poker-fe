import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HTTPClient {
	static _instance: HTTPClient;

	private _axios: AxiosInstance;

  private constructor(private baseURL = '') {
    this._axios = axios.create({ baseURL });
    this._initializeInterceptors();
	}

  static getInstance(baseURL = ''){
    if (!this._instance) {
      this._instance = new HTTPClient(baseURL);    
    };
    return this._instance;
  };

  set url(baseURL: string) {
    this._axios.defaults.baseURL = baseURL;
  };

  get http() {
    return this._axios;
  };

  private _initializeInterceptors = () => {
    this._axios.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );

    this._axios.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    )
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  private _handleRequest = (config: AxiosRequestConfig) => config;
  
  private _handleError = (error: AxiosError) => {
    console.dir(error);
  };
};

export const httpClient = HTTPClient.getInstance();
