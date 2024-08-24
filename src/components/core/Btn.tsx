import {
  Box,
  Button,
  ButtonText,
  HStack,
  LinearGradient,
  Spinner,
  Text,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import AppIcon, { IconProps } from './AppIcon';
import { COLORS } from '../../styles';
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type HStackProps = React.ComponentProps<typeof HStack>;
type TextProps = React.ComponentProps<typeof Text>;

type BottomProps = {
  children: JSX.Element | string;
  isLoading?: boolean;
  isDisabled?: boolean;
  colors?: Array<string>;
  icon?: IconProps;
  iconSide?: 'LEFT' | 'RIGHT';
  onPress?: () => void;
  _text?: TextProps;
  backgroundColor?: string;
} & HStackProps;

const Btn: React.FC<BottomProps> = ({
  children,
  isLoading = false,
  isDisabled = false,
  colors = [
    COLORS.secondary[900],
    COLORS.secondary[900],
    COLORS.secondary[600],
  ],
  icon,
  onPress,
  _text,
  iconSide = 'LEFT',
  backgroundColor = 'transparent',
  ..._hStack
}) => {
  const renderIcon = React.useMemo(
    () => icon && <AppIcon {...icon} color="#fff" size={16} />,
    [icon],
  );

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={isLoading || isDisabled}
        style={{
          backgroundColor: backgroundColor,
          opacity: isDisabled ? 0.5 : 1,
          borderRadius: 50,
        }}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          rounded={'$full'}
          as={RNLinearGradient}>
          <HStack
            {..._hStack}
            space={'sm'}
            rounded={'$full'}
            p={'$2'}
            alignItems="center"
            justifyContent="center">
            {!isLoading ? iconSide === 'LEFT' && renderIcon : null}
            {isLoading ? (
              <>
                <ButtonSpinner mr="$1" size={'small'} color={'$white'} />
                <Text color="white" fontWeight="sm" fontSize={'$lg'} {..._text}>
                  Please wait...
                </Text>
              </>
            ) : typeof children === 'string' ? (
              <Text color="white" fontWeight="lg" fontSize={'$lg'} {..._text}>
                {children}
              </Text>
            ) : (
              children
            )}

            {!isLoading ? iconSide === 'RIGHT' && renderIcon : null}
          </HStack>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default Btn;
