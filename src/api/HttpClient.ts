import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class _HTTPClient {
	static _instance: _HTTPClient;

	private _axios: AxiosInstance;

  constructor(public baseURL = ' ') {
    this._axios = axios.create({ baseURL: this.baseURL});
    this._initializeInterceptor();
	}

  static getInstance(){
    if (!this._instance) {
      this._instance = new _HTTPClient();    
    };
    return this._instance;
  };

  private _initializeInterceptor = () => {
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
