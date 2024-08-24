import { Box, Text, Icon, AddIcon } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import useAuth from '~/hooks/useAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppIcon from '~/components/core/AppIcon';
import { COLORS } from '~/styles';
import React from 'react';
import { Private } from '~/screens';

const BottomTab = createBottomTabNavigator();

export default function TabLayout() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const toggleOpened = () => {
    setOpen(!open);
  };
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            margin: 0,
            borderTopEndRadius: 22,
            borderTopStartRadius: 22,
            height: 60,
            backgroundColor: '#090f3f'
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Private.Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#20a0bd'} AntDesignName="home" />
                ) : (
                  <AppIcon color={'#FFFFFF'} AntDesignName="home" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="AllBookings"
          component={Private.BasicStoreDetails}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#20a0bd'} FontAwesomeName="envelope-o" />
                ) : (
                  <AppIcon color={'#FFFFFF'} FontAwesomeName="envelope-o" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="TransactionHistory"
          component={Private.TransactionHistory}
          options={{
            tabBarItemStyle: {
              height: 0,

            },
            tabBarIcon: ({ focused }) => (
              <Box
                bg="#070c34"
                alignItems={'center'}
                justifyContent={'center'}
                rounded={'$full'}
                w={'$12'}
                h={'$12'}
                mt={'$12'}
              >
                {focused ? (
                  <AppIcon color={'#20a0bd'} FeatherName="menu" />
                ) : (
                  <AppIcon color={'#FFFFFF'} FeatherName="menu" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="MyProjects"
          component={Private.Slot}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#20a0bd'} FeatherName="calendar" />
                ) : (
                  <AppIcon color={'#FFFFFF'} FeatherName="calendar" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Private.Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#20a0bd'} FontAwesomeName="user-circle" />
                ) : (
                  <AppIcon color={'#FFFFFF'} FontAwesomeName="user-circle-o" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
