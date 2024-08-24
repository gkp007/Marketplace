import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { PublicRoutesTypes } from './types';
import { PrivateNavigationProp } from '../private/types';
import { Auth, Public } from '../../screens';

type PublicRouteProps = {
  initialRouteName?: keyof PublicRoutesTypes;
};
const Stack = createSharedElementStackNavigator<PublicRoutesTypes>();

export default function PublicRoutes({ initialRouteName }: PublicRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Public.Onboarding} />
      <Stack.Screen name="Splash" component={Public.Splash} />
      <Stack.Screen name="Login" component={Auth.Login} />
      <Stack.Screen name="Register" component={Auth.Register} />
      <Stack.Screen name="ForgotPassword" component={Auth.ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={Auth.ResetPassword} />
      <Stack.Screen name="OtpScreen" component={Auth.OtpScreen} />
      <Stack.Screen name="BusinessInfo" component={Auth.BusinessInfo} />
      <Stack.Screen name="RegistrationDetails" component={Auth.RegistrationDetails} />
      <Stack.Screen name="Location" component={Auth.Location} />
    </Stack.Navigator>
  );
}
