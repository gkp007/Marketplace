import { DrawerActions, useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import AppIcon, { IconProps } from '../core/AppIcon';
import { COLORS } from 'styles';
import { Box, HStack, Text } from '@gluestack-ui/themed';
import Btn from '../core/Btn';
import { Image } from '@gluestack-ui/themed';
import { ANIMATIONS, IMAGES } from '~/assets';

type HeaderProps = React.ComponentProps<typeof Row>;
type titleProps = React.ComponentProps<typeof Text>;
type Props = {
  title?: any;
  icons?: {
    icon?: IconProps;
    onPress?: () => void;
    side: 'LEFT' | 'RIGHT';
    dot?: boolean;
    _btn?: React.ComponentProps<typeof Btn>;
  }[];
  showBars?: boolean;
  _headerProps?: HeaderProps;
  _titleProps?: titleProps;
  shadow?: number;
  marginX?: number;
  iconClr?: string;
  iconBg?: string;
  iconRound?: string;
} & React.ComponentProps<typeof Box>;

export default function PrivateContainer({
  title,
  children,
  icons,
  showBars,
  _headerProps,
  _titleProps,
  shadow,
  marginX,
  iconRound,
  iconBg,
  iconClr,
  ..._box
}: Props) {
  const { canGoBack, dispatch, goBack } = useNavigation();
  const leftIcon = icons?.find(_ => _.side === 'LEFT');
  const rightIcons = icons?.filter(_ => _.side === 'RIGHT');
  const backIconColor = _titleProps?.color !== 'white' ? 'purple' : 'white';
  return (
    <>
      <Box
        flex={1}
        bg={'$coolGray100'}
        {..._box}>
        <HStack
          bg="white"
          py={3}
          borderBottomWidth={showBars ? 1 : 0}
          borderBottomColor="gray.200"
          alignItems={'center'}
          justifyContent={'space-between'}
          {..._headerProps}>
          <HStack alignItems={'center'}>
            <Btn
              colors={['transparent', 'transparent']}
              onPress={() => {
                if (showBars) return dispatch(DrawerActions.openDrawer());
                if (leftIcon?.onPress) return leftIcon.onPress();
                if (canGoBack()) return goBack();
              }}>

              <AppIcon
                size={22}
                color={'black'}
                {...(leftIcon?.icon || {
                  AntDesignName: 'arrowleft',
                })}
              />
            </Btn>
            {title ? (
              <Text
                color="black"
                fontWeight={'bold'}
                fontSize={'$md'}
                {..._titleProps}>
                {title}
              </Text>
            ) : (
              <Image
                source={IMAGES.LOGO}
                resizeMode={'contain'}
                alt="Combber"
                h={'$10'}
                mt={'$1'}
                w="$10"
              />
            )}
          </HStack>
          <HStack alignItems={'center'}>
            {rightIcons?.map((_, i) => (
              <React.Fragment key={i}>
                <Btn
                  colors={['white', 'white']}
                  onPress={() => {
                    if (_?.onPress) return _.onPress();
                  }}
                  position={'relative'}
                  bg={iconBg}
                  shadow={shadow}
                  mx={marginX}
                  rounded={iconRound ? iconRound : '$8'}
                  {..._._btn}>
                  {_?.dot && (
                    <Box
                      position={'absolute'}
                      top="$0"
                      right="$3"
                      h={'$2'}
                      w={'$2'}
                      rounded="$full"
                      bg="danger.600"
                    />
                  )}
                  <AppIcon
                    size={20}
                    color={iconClr ? iconClr : '#000'}
                    {..._?.icon}
                  />
                </Btn>
              </React.Fragment>
            ))}
          </HStack>
        </HStack>
        {children}
      </Box>
    </>
  );
}
