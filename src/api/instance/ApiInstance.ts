import { AxiosInstance, AxiosRequestConfig } from "axios";
import { axiosinstance } from "./axios";

interface IApiInstance {
  get<T>(url: string, body?: any): Promise<T>;
}

export class AxiosInstanceImp implements IApiInstance {
  private static instance: AxiosInstance = axiosinstance;

  async get<T,>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await AxiosInstanceImp.instance.get<T>(url, config);
    return response.data;
  }
}