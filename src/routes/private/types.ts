import {CompositeNavigationProp} from '@react-navigation/native';
import {Private} from '../../screens';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type BottomTabsTypes = {
  Home: undefined;
  Profile: undefined;
};
type PrivateScreens = {
  [key in keyof typeof Private]: undefined;
};

type OmittedScreens = 'Search';

export type PrivateNavigationProp = Omit<PrivateScreens, OmittedScreens> & {
  Search: undefined;
};

export type PrivateRoutesType = {
  TabLayouts: undefined;
} & PrivateNavigationProp;

export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesType>
>;
