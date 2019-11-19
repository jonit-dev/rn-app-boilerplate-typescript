export interface IUser {
  _id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserResponse {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IUserCreatedResponse {
  user: IUserResponse;
  token: string;
}
