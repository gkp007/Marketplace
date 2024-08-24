import { View, Text } from 'react-native';
import React from 'react';
import useAuth from './hooks/useAuth';
import PrivateRoutes from './routes/private';
import PublicRoutes from './routes/public';

const Router = () => {
  const { user } = useAuth();
  return user ? (
    <PublicRoutes initialRouteName="Login" />
  ) : (
    <PrivateRoutes initialRouteName="Home" />
  );
};

export default Router;
