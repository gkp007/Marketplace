import { View, Text } from 'react-native';
import React from 'react';
import { PrivateRoutesType } from './types';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Private } from '../../screens';
import { TabLayout } from '../layouts';

const Stack = createSharedElementStackNavigator<PrivateRoutesType>();

type PrivateRouteProps = {
  initialRouteName?: keyof PrivateRoutesType;
};

export default function PrivateRoutes({ initialRouteName }: PrivateRouteProps) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'TabLayouts'}>

      <Stack.Screen name="TabLayouts" component={TabLayout} />
      <Stack.Screen name="Home" component={Private.Home} />
      <Stack.Screen name="Profile" component={Private.Profile} />
      <Stack.Screen name="Notification" component={Private.Notification} />
      <Stack.Screen name='GooMap' component={Private.GooMap} />
      <Stack.Screen name='EmployeeManagement' component={Private.EmployeeManagement} />
      <Stack.Screen name='ManageStore' component={Private.ManageStore} />
      <Stack.Screen name='Gallery' component={Private.Gallery} />
      <Stack.Screen name='TransactionHistory' component={Private.TransactionHistory} />
      <Stack.Screen name='BookingDetails' component={Private.BookingDetails} />
      <Stack.Screen name='BlockList' component={Private.BlockList} />
      <Stack.Screen name='Help' component={Private.Help} />
      <Stack.Screen name='Ratings' component={Private.Ratings} />
      <Stack.Screen name='Services' component={Private.Services} />
      <Stack.Screen name='ServiceCreate' component={Private.ServiceCreate} />
      <Stack.Screen name='Slot' component={Private.Slot} />
      <Stack.Screen name='BookingStats' component={Private.BookingStats} />
      <Stack.Screen name='RevenueStats' component={Private.RevenueStats} />
      <Stack.Screen name='SlotStats' component={Private.SlotStats} />
      <Stack.Screen name='AllBookings' component={Private.AllBookings} />
      <Stack.Screen name='BasicProfileEdit' component={Private.BasicProfileEdit} />
      <Stack.Screen name='ProfileDetails' component={Private.ProfileDetails} />
      <Stack.Screen name='BasicStoreDetails' component={Private.BasicStoreDetails} />
      <Stack.Screen name='Facilities' component={Private.Facilities} />
      <Stack.Screen name='AddProfessional' component={Private.AddProfessional} />
    </Stack.Navigator>
  );
}
