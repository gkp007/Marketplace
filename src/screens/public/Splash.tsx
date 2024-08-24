import React, {useState} from 'react';
import {Box, Pressable, Text, VStack} from '@gluestack-ui/themed';
import {COLORS} from '../../styles';
import {ANIMATIONS, IMAGES} from '../../assets';
import AnimatedLottieView, {AnimationObject} from 'lottie-react-native';
import Btn from '../../components/core/Btn';
import {useNavigation} from '@react-navigation/native';
import {PublicRouteProps} from '../../routes/public/types';

const Splash = () => {
  const {navigate} = useNavigation<PublicRouteProps>();
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <Text>Splash</Text>
    </>
  );
};

export default Splash;
