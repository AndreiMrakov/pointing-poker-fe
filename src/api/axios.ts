import axios, { AxiosInstance } from 'axios';

export class Axios {
	private static classInstance?: Axios;

	readonly instance: AxiosInstance;

  constructor(baseURL: string){
		this.instance = axios.create({ baseURL });
	}

  public static getInstance(baseURL: string){
    if (!this.classInstance) {
      this.classInstance = new Axios(baseURL);
    };
    return this.classInstance;
  }
};
