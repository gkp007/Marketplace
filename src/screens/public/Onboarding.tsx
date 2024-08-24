import React, {useState} from 'react';
import {Box, Pressable, Text, VStack} from '@gluestack-ui/themed';
import {COLORS, HEIGHT} from '../../styles';
import {ANIMATIONS, IMAGES} from '../../assets';
import AnimatedLottieView, {AnimationObject} from 'lottie-react-native';
import Btn from '../../components/core/Btn';
import {useNavigation} from '@react-navigation/native';
import {PublicRouteProps} from '../../routes/public/types';

export default function Onboarding() {
  const {navigate} = useNavigation<PublicRouteProps>();
  return (
    <>
      <Box bg={COLORS.theme[600]} flex={1}>
        {/* <AnimatedLottieView
          source={ANIMATIONS.Splash}
          autoPlay
          style={{height: 400}}
          loop={false}
        /> */}
        {/* <Text size="sm" color="white" textAlign="center">
          Unleash the power of AI! Discover the top 5 marketplaces to sell your
          creative AI prompts, turning curiosity into a lucrative endeavor!
        </Text> */}
        <VStack space="lg" m={'$5'}>
          <Btn
            w={'$full'}
            h={'$12'}
            onPress={() => navigate('Login')}
            // iconSide={'RIGHT'}
            // icon={{FeatherName: 'lock'}}
            backgroundColor="transparent"
            _text={{
              fontWeight: '$medium',
              fontSize: '$lg',
              color: '$white',
            }}>
            LOGIN
          </Btn>
          <Btn
            w={'$full'}
            h={'$12'}
            onPress={() => navigate('Register')}
            colors={['transparent', 'transparent', 'transparent']}
            borderWidth={'$2'}
            // iconSide={'RIGHT'}
            // icon={{FeatherName: 'lock'}}
            backgroundColor="transparent"
            _text={{
              fontWeight: '$medium',
              fontSize: '$lg',
              color: '$white',
            }}>
            SIGN UP
          </Btn>
        </VStack>
      </Box>
    </>
  );
}
