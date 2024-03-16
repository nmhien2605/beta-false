import axios from 'axios';
import { LocalStorage } from '@/utils/newLocalStorage';
// import { errorMessage } from '@/configs/error';
// import { toast } from 'react-toastify';
// import { ToastErrorIcon } from '@/components/icons';

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT!!,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  function (config) {
    const token = LocalStorage.get('sessionCert');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    try {
      const { status } = error.response;
      if (status === 401) {
        window.localStorage.removeItem('sessionCert');
        if (!window.location.pathname.includes('auth')) {
          document.location.replace('/auth/login');
        }
      }
      // return Promise.reject(error.response?.data);
      // const { message }: { message: string } = error.response?.data;
      // if (Object.keys(errorMessage).includes(message)) {
      //   toast.error(errorMessage[message], { icon: ToastErrorIcon });
      // }
    } catch (err) {
      // error
    } finally {
      if (error.response?.data) {
        return error.response?.data;
      }
      return { data: null };
    }
  }
);

class HttpClient {
  get<T>(endpoint: string, query?: any, headers?: any): Promise<T> {
    return Axios.get(endpoint, { params: query });
  }
  post<T>(endpoint: string, body: any, query?: any): Promise<T> {
    return Axios.post(endpoint, body, { params: query });
  }
  put<T>(endpoint: string, body: any): Promise<T> {
    return Axios.put(endpoint, body);
  }
  delete<T>(endpoint: string, body: any, query?: any): Promise<T> {
    return Axios.delete(endpoint, { data: body, params: query });
  }
}

export const api = new HttpClient();
