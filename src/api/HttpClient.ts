import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class _HTTPClient {
	static _instance: _HTTPClient;

	private _axios!: AxiosInstance;

  constructor(public baseURL = ' ') {
    this._axios = axios.create({ baseURL: this.baseURL});
    this._initializeResponseInterceptor();
	}

  static getClassInstance(){
    if (!this._instance) {
      this._instance = new _HTTPClient();    
    };
    return this._instance;
  };

  private _initializeResponseInterceptor = () => {
    this._axios.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;
  
  private _handleError = (error: AxiosError) => {
    console.dir(error);
  };
};
