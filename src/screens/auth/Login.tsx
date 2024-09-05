import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Pressable,
  Spinner,
  Center,
} from '@gluestack-ui/themed';
import { useLoginMutation } from '../../service';

import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useWindowDimensions } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { useToast } from '@gluestack-ui/themed';
import { PublicRouteProps } from '../../routes/public/types';
import AppIcon, { IconProps } from '../../components/core/AppIcon';
import useMutation from '../../hooks/useMutation';
import { IMAGES } from '../../assets';
import { COLORS, HEIGHT, WIDTH } from '../../styles';
import AppInput from '../../components/core/AppInput';
import Btn from '../../components/core/Btn';
import { ScrollView } from 'react-native-gesture-handler';

type FormInput = {
  key: string;
  label?: string;
  placeholder: string;
  icon: IconProps;
  rules: Object;
  inputProps?: any;
};

type FormData = {
  [key: string]: string;
};

export default function Login(): JSX.Element {
  // const handleRegistration = (data: FormData) => {
  //   try {
  //     Toast({
  //       title: true ? 'Registration Successful!' : 'Registration Failed',
  //       duration: 5000,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [Login, { isError, isSuccess, data, error, reset, isLoading }] =
    useLoginMutation();
  const toast = useToast();
  const [isPhone, setIsPhone] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation<PublicRouteProps>();
  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setUser, getUser, setToken } = useAuth();
  // const {mutation: login, isLoading} = useMutation();
  const { mutation: gmail, isLoading: isGmailValidating } = useMutation();
  const { mutation: gLogin } = useMutation();
  let objData: any = {};

  const onSubmit = async (data: any) => {
    console.log('===>', data);
    Login({
      email: data?.Email,
      password: data?.password,
    });
  };

  console.log('---', data);
  console.log({ error });


  const formInputs1: FormInput[] = useMemo(
    () => [
      {
        key: 'mobile',
        label: undefined,
        placeholder: 'Enter your mobile number',
        icon: { IoniconsName: 'call-outline', color: 'gray' },
        rules: {
          required: 'Mobile number is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Invalid mobile number',
          },
        },
        inputProps: {
          keyboardType: 'numeric',
          autoCapitalize: 'none',
          variant: 'underlined',
        },
      },
    ],
    [secureTextEntry],
  );

  return (
    <VStack bg="#fff" flex={1} justifyContent='space-around' >
      <VStack justifyContent='space-around' flex={1}>
        <Image
          w="$56"
          h="$64"
          source={IMAGES.ONBOARDING}
          alt="logo"
          alignSelf="center"
        />
      </VStack>
      <VStack my={'$2'} justifyContent={'space-between'} >
        <Box px="$4">
          <Heading fontSize={'$xl'} color={'black'}>
            Login/Register with Marketplace
          </Heading>

          <Text fontSize={'$xs'} color={'blue.500'}>
            Login or register to continue using app
          </Text>
        </Box>

        <VStack space={'md'}>
          <Box px="$4">
            {formInputs1.map(input => (
              <AppInput
                input={input}
                key={input.key}
                control={control}
                errorMessage={errors?.[input?.key]?.message}
              />
            ))}
          </Box>

          <Box mx={15} mt={'$4'}>
            <Btn
              bg={COLORS.theme[600]}
              onPress={() => navigate('OtpScreen')}

              // onPress={handleSubmit(onSubmit)}

              _text={{ color: 'white', fontSize: '$sm' }}>
              <Heading fontSize={15} color={'white'}>
                {isLoading || isGmailValidating ? (
                  <Spinner size={'small'} color={'white'} />
                ) : (
                  <HStack alignItems={'center'} space={'xs'}>
                    <Text color={'white'} bold>
                      {' '}
                      Submit{' '}
                    </Text>
                    <AppIcon
                      FeatherName="log-in"
                      color={'white'}
                      size={20}
                    />
                  </HStack>
                )}
              </Heading>
            </Btn>
          </Box>

        </VStack>

        <>
          <Text mb={'$3'} mt={'$3'} textAlign={'center'}>
            - Or -
          </Text>

          <Pressable
            $pressed={{ opacity: 0.8 }}
            w={'92%'}
            py={'$1.5'}
            borderColor={'blue.800'}
            rounded={'$full'}
            bg={'white'}
            alignSelf={'center'}
            justifyContent={'center'}
            alignItems={'center'}
            borderWidth={'$1'}>
            <HStack
              alignItems={'center'}
              justifyContent={'center'}
              space={'md'}>
              <Image
                source={IMAGES.GOOGLE}
                resizeMode={'contain'}
                h="$5"
                w="$6"
                bg={'transparent'}
                alt="Logo"
              />
              <Heading fontSize={15} py={1} color={'gray'}>
                Login With Google
              </Heading>
            </HStack>
          </Pressable>
        </>

        <Box alignItems={'center'} mt={'$3'}>
          <HStack>
            <Text fontSize={11} color="gray.500">
              By continuing, you agree to our{' '}
            </Text>
            <Pressable $pressed={{ opacity: 0.6 }}>
              <Text fontSize={12} color="red.500" underline>
                Terms and Conditions
              </Text>
            </Pressable>
          </HStack>
          <HStack>
            <Text fontSize={11} color="gray.500">
              and{' '}
            </Text>
            <Pressable $pressed={{ opacity: 0.6 }}>
              <Text fontSize={12} color="red.500" underline>
                Privacy Policy
              </Text>
            </Pressable>
          </HStack>
        </Box>

      </VStack>
    </VStack >
  );
}
