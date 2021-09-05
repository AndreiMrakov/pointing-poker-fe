import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class HTTPClient {
	static classInstance?: HTTPClient;

	private instance!: AxiosInstance;

  constructor(public baseURL: string){
    this._initializeResponseInterceptor();
	}

  static getClassInstance(baseURL: string){
    if (!this.classInstance) {
      this.classInstance = new HTTPClient(baseURL);
    };
    return this.classInstance;
  };

  createInstance = () => {
    this.instance = axios.create({ baseURL: this.baseURL });
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
