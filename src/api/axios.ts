import { ICard, ITask, IUser } from '@/interfaces';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export class Axios {
	private static classInstance?: Axios;

	readonly instance: AxiosInstance;

  constructor(baseURL: string){
		this.instance = axios.create({ baseURL });
    this._initializeResponseInterceptor();
	}

  public static getInstance(baseURL: string){
    if (!this.classInstance) {
      this.classInstance = new Axios(baseURL);
    };
    return this.classInstance;
  };

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;
  
  protected _handleError = (error: AxiosError) => {
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Headers:', error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log('Config:', error.config);
  };

  getUsers = () => this.instance.get<IUser[]>('/users');
  getUserById = (id: number) => this.instance.get<IUser>(`/users/${id}`);
  createUser = (body: IUser) => this.instance.post('/users', body);
  deleteUser = (id: number) => this.instance.delete(`/users/${id}`);

  getTasks = () => this.instance.get<ITask[]>('/tasks');
  getTaskById = (id: number) => this.instance.get<ITask>(`/tasks/${id}`);
  createTask = (body: ITask) => this.instance.post('/tasks', body);
  deleteTask = (id: number) => this.instance.delete(`/tasks/${id}`);

  getCards = () => this.instance.get<ICard[]>('/cards');
  sendCard = (body: ICard) => this.instance.post('/cards', body);
};
