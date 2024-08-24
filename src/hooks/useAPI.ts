import {useState} from 'react';
import useSWR from 'swr';
import localStorage from '@react-native-async-storage/async-storage';

export const getAccessToken = async () => {
  const accessToken = await localStorage.getItem('accessToken');
  return accessToken ? JSON.parse(accessToken) : null;
};

// export const BASE_URL: 'https://aio.carkarobar.com/api/v1' = `https://aio.carkarobar.com/api/v1`;
export const BASE_URL: 'http://192.168.1.19:8080/api/v1' = `http://192.168.1.19:8080/api/v1`;

type useFetchOptions = {
  BASE_URL: typeof BASE_URL | '/api';
};

type MutationOptions = {
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'GET';
  isFormData?: boolean;
  BASE_URL?: string;
  body?: any;
};

export const useFetch = <T>(path: string, options?: useFetchOptions) => {
  // console.log(path);
  const url = options?.BASE_URL || BASE_URL;
  const data = useSWR<{
    data?: T;
    success: boolean;
    msg: string;
    pagination?: {total: number; page?: string; limit?: string};
  }>(
    path?.includes('undefined') ? null : `${url}/${path}`,
    async (args: any) => {
      const headers: HeadersInit_ = {};
      const token = await getAccessToken();
      if (token) headers['x-access-token'] = token;
      const _ = await fetch(args, {headers});
      return await _.json();
    },
  );
  return {
    ...data,
    response: data,
    success: data.data?.success,
    msg: data.data?.msg,
    data: data.data?.data,
    pagination: data?.data?.pagination,
  };
};

export const useChange = () => {
  const [isChanging, setIsChanging] = useState(false);
  const change = async (path: string, options?: MutationOptions) => {
    // console.log(path, options?.body);
    try {
      const token = await getAccessToken();
      const url = options?.BASE_URL || BASE_URL;
      setIsChanging(true);
      const method = options?.method || 'POST';
      const body = options?.body
        ? options?.isFormData
          ? options?.body
          : JSON.stringify(options.body)
        : `{}`;
      const headers: HeadersInit_ = options?.isFormData
        ? {}
        : {'Content-Type': 'application/json'};
      if (token) headers['x-access-token'] = token;
      const fetchOptions = {
        method,
        headers,
        body,
      };
      if (options?.method === 'GET') delete fetchOptions.body;
      const response = await fetch(`${url}/${path}`, fetchOptions);

      const status = response.status;
      const results = await response.json();
      console.log({results});
      setIsChanging(false);
      return {results, status};
    } catch (error) {
      setIsChanging(false);
      throw new Error(
        error instanceof Error ? error.message : 'Something went wrong',
      );
    }
  };
  return {change, isChanging};
};
