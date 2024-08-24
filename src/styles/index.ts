import {createConfig} from '@gluestack-style/react';
import {fontFamily} from '../../app.json';
import {config} from '@gluestack-ui/config';
import {Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').width;

export const COLORS = {
  primary: {
    50: '#F5F5F5',
    100: '#E0E0E0',
    200: '#BDBDBD',
    300: '#9E9E9E',
    400: '#757575',
    500: '#616161',
    600: '#424242',
    700: '#303030',
    800: '#212121',
    900: '#111111',
    950: '#000000',
  },
  secondary: {
    50: '#D4D9E6',
    100: '#A8B3CF',
    200: '#7C8EBA',
    300: '#5169A3',
    400: '#2A478F',
    500: '#203E80',
    600: '#1A346D',
    700: '#13285A',
    800: '#0D1E48',
    900: '#061336',
    950: '#000A24',
  },
  dark: {
    50: '#F2F3F5',
    100: '#D9DBE0',
    200: '#B6BBC4',
    300: '#939AA8',
    400: '#737B8D',
    500: '#596074',
    600: '#454B5A',
    700: '#363C4B',
    800: '#2A303D',
    900: '#1E242F',
    950: '#11161F',
  },

  theme: {
    50: '#E6E8FF',
    100: '#C2C7FF',
    200: '#9DA5FF',
    300: '#7983FF',
    400: '#5D6DFF',
    500: '#4F66D9', //main
    600: '#455CC2',
    700: '#3A51AB',
    800: '#304791',
    900: '#243B6F',
    950: '#111111',
  },
};
export const customConfig = createConfig({
  tokens: {
    ...config,
    colors: COLORS,
    fontConfig: {
      [fontFamily]: {
        100: {
          normal: `${fontFamily}-Light`,
          italic: `${fontFamily}-LightItalic`,
        },
        300: {
          normal: `${fontFamily}-Regular`,
          italic: `${fontFamily}-Italic`,
        },
        400: {
          normal: `${fontFamily}-Medium`,
          italic: `${fontFamily}-MediumItalic`,
        },
        500: {
          normal: `${fontFamily}-SemiBold`,
          italic: `${fontFamily}-SemiBoldItalic`,
        },
        600: {
          normal: `${fontFamily}-Bold`,
          italic: `${fontFamily}-BoldItalic`,
        },
        700: {
          normal: `${fontFamily}-ExtraBold`,
          italic: `${fontFamily}-ExtraBoldItalic`,
        },
        800: {
          normal: `${fontFamily}-Black`,
          italic: `${fontFamily}-BlackItalic`,
        },
      },
    },
    fonts: {
      heading: `${fontFamily}`,
      body: `${fontFamily}`,
      mono: `${fontFamily}`,
    },
  },
  aliases: undefined,
});
type Config = typeof customConfig;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends Config {}
}

export default customConfig;
