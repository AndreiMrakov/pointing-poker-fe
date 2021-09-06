import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class _httpClient {
	static _instance: _httpClient;

	private instance!: AxiosInstance;

  constructor(public baseURL: string = ' ') {
	}

  static getClassInstance(){
    if (!this._instance) {
      this._instance = new _httpClient();    
    };
    return this._instance;
  };

  createInstance = () => {
    this.instance = axios.create({ baseURL: this.baseURL});
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;
  
  private _handleError = (error: AxiosError) => {
    console.dir(error);
  };
};
