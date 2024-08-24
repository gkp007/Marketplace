import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Public, Auth} from '~/screens';

type PublicScreens = {
  [key in keyof typeof Public]: undefined;
};

type AuthScreens = {
  [key in keyof typeof Auth]: undefined;
};

type OmittedScreen = '';

export type PublicNavigationProp = Omit<PublicScreens, OmittedScreen>;

export type PublicRoutesTypes = PublicScreens & AuthScreens;

export type PublicRouteProps = NativeStackNavigationProp<PublicRoutesTypes>;
