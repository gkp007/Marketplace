import {BASE_URL} from '../../utils';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const UserApi = createApi({
  reducerPath: 'UserApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),

  endpoints: build => ({
    Login: build.mutation<any, {email: string; password: string}>({
      query: (loginInfo: {email: string; password: string}) => ({
        url: `user/login`,
        method: 'POST',
        body: loginInfo,
      }),
      onQueryStarted: data => {
        console.log('Login query started');
        console.log('Query Info:', data);
      },
    }),
  }),
});

export const {useLoginMutation} = UserApi;
