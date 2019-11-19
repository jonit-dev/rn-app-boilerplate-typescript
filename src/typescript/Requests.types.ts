import { CancelToken } from 'axios';

export interface IRequestResponse {
  config: {
    adapter: any;
    cancelToken: CancelToken;
    url: string;
    method: string;
    data: object;
    headers: object;
    maxContentLength: number;
    timeout: number;
    transformRequest: any;
    transformResponse: any;
    validateStatus: any;
    xsrfCookieName: string;
    xsrfHeaderName: string;
  };
  data: object;
  headers: object;
  request: any;
  status: number;
  statusText: string;
}

export interface IRequestDefaultError {
  status: string;
  message: string;
  details?: string;
}

export enum RequestTypes {
  POST = "post",
  GET = "get",
  PATCH = "patch",
  UPDATE = "update",
  DELETE = "delete"
}
