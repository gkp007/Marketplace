import React, { useMemo } from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Pressable,
  Spinner,
} from '@gluestack-ui/themed';

import { COLORS } from '~/styles';
import { useNavigation } from '@react-navigation/native';
import { StackAndTabType } from '~/routes/private/types';
import { IMAGES } from '~/assets';
import { ImageBackground } from 'react-native';
import localStorage from '@react-native-async-storage/async-storage';
import { useToast } from '@gluestack-ui/themed';
import useAuth from '~/hooks/useAuth';
import { Toast } from '@gluestack-ui/themed';
import useMutation from '~/hooks/useMutation';
import OtpInput from '~/components/core/OTPInput';
import Btn from '~/components/core/Btn';
import AppInput from '~/components/core/AppInput';
import { useForm } from 'react-hook-form';

type otp = {
  Success: undefined;
};

export default function OTPVerification({ route: { params } }: Props): JSX.Element {
  const [otpValue, setOtpValue] = React.useState<string[]>([]);
  const { navigate, goBack } = useNavigation<StackAndTabType>();
  const objData = '452144';
  // Accessing route params?
  const [asyncToken, setSyncToken] = React.useState<any>();
  const { mutation: login, isLoading } = useMutation();
  const { mutation: otp, isLoading: isOtpLoading } = useMutation();
  React.useEffect(() => {
    const fetchData = async () => {
      const accessToken = await localStorage.getItem('accessToken');
      setSyncToken(accessToken);
    };

    fetchData();
  }, [objData]);

  const handleOtpChange = (newValue: string[]) => {
    setOtpValue(newValue);
  };
  console.log({ objData });

  const handleResend = async () => {
    try {
      const res = await otp(`auth/generate-otp`, {
        body: objData,
      });

      Toast({
        title: 'OTP sent successfully',
        duration: 2000,
        bg: 'success.500',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { setUser, getUser, setToken } = useAuth();

  const toast = useToast();

  const handleLogin = async () => {
    try {
      const res = await login(`auth/login-with-phone`, {
        body: {
          token: params?.token || asyncToken,
          otp: otpValue,
        },
      });

      // setUser({
      //   mobile: mobileNumber,
      //   otp: otpValue.join(''), // Assuming you need the OTP value in string format
      // });726866

      if (res?.results?.success) {

        setToken(res?.results?.data?.token);
        setUser(res?.results?.data);
        toast.show({
          title: res?.results?.success ? 'Login Successful!' : 'Login Failed',
          duration: 5000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const formInputs: FormInput[] = useMemo(
    () => [
      {
        key: 'username',
        label: undefined,
        placeholder: 'Enter registration email address',
        icon: { FeatherName: 'mail' },
        rules: {
          required: 'Email address is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
        inputProps: { keyboardType: 'email-address', autoCapitalize: 'none' },
      },
    ],
    [],
  );


  return (
    <VStack
      justifyContent='space-between'
      h="$full"
      bg={'white'}>

      <Image
        w="$56"
        h="$64"
        mt={'$24'}
        source={IMAGES.FORGOT}
        alt="logo"
        alignSelf='center'
      />
      <Box

        bg={'white'}>
        <Box w={'97%'} my={5} alignSelf={'center'}>
          <VStack space={'xs'}>
            <VStack space={'xs'}>
              <Heading mx={'$1'} fontSize={26} color={'black'}>
                Forgot Password?
              </Heading>
              <Text
                fontSize={12}
                mx={'$1'}
                w={'80%'}
                color={'blue.500'}
              >
                Enter your your email. If your email is registered then we will send you a code to your mobile.{' '}
              </Text>
            </VStack>
            <Box mx={5} mb={'$4'}>
              {formInputs.map(input => (
                <AppInput
                  input={input}
                  key={input.key}
                  control={control}
                  errorMessage={errors?.[input?.key]?.message}
                />
              ))}
            </Box>
            <Box>

              <Box m={2} mb={'$5'} mt={'$2'}>
                <Btn
                  borderRadius="$sm"
                  alignItems={'center'}
                  w="$full"
                  onPress={handleLogin}
                  bg={COLORS.theme[600]}
                  _text={{

                    fontSize: '$md',
                    fontFamily: 'Montserrat-Semibold',
                    textAlign: 'center',
                  }}>
                  <HStack space={'md'} alignItems={'center'}>
                    {/* <Spinner alignSelf={'center'} size={13} color={'white'} /> */}

                    {isLoading ? (
                      <Spinner size={'small'} color={'white'} />
                    ) : (
                      <Heading py={1} fontSize={15} color={'white'}>
                        Verify
                      </Heading>
                    )}
                  </HStack>
                </Btn>
              </Box>

              <HStack
                mb={'$4'}
                justifyContent={'center'}
                alignItems={'center'}
                mt={4}
                space={'md'}>
                <Text fontSize={11} color={'gray'}>
                  Didn't received the OTP?
                </Text>
                <Pressable $pressed={{ opacity: 0.5 }} onPress={handleResend}>
                  <Text
                    underline
                    fontSize={12}

                    color={COLORS.theme[600]}>
                    Resend OTP
                  </Text>
                </Pressable>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}

