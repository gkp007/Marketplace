import AnimatedLottieView, { AnimationObject } from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title?: string;
  animation?: AnimationObject;
  subtitle?: string;
  action?: {
    label: string;
    onPress?: () => void;
  };
  noLoop?: boolean;
  isLoading?: boolean;
  color?: any;
  height?: any;
  Fontsize?: any;
} & React.ComponentProps<typeof Center>;

export default function Empty({
  title,
  subtitle,
  action,
  animation,
  color,
  isLoading,
  Fontsize,
  height,
  noLoop = false,
  ..._centerProps
}: Props) {
  const { goBack } = useNavigation();
  const onPress = action?.onPress ?? goBack;
  return (
    <>
      <Center {..._centerProps}>
        {animation && (
          <Center height={height} w="full">
            {isLoading ? (
              <Spinner size={'lg'} />
            ) : (
              <AnimatedLottieView source={animation} autoPlay loop={!noLoop} />
            )}
          </Center>
        )}
        {isLoading ? (
          <></>
        ) : (
          <>
            <Heading fontSize={Fontsize}>{title}</Heading>
            {Boolean(subtitle) && (
              <Heading
                fontSize={'lg'}
                textAlign="center"
                fontWeight={'medium'}
                color={color}
                my="2">
                {subtitle}
              </Heading>
            )}
            {Boolean(action) && (
              <Btn my={'2'} onPress={onPress}>
                {`${action?.label}`}
              </Btn>
            )}
          </>
        )}
      </Center>
    </>
  );
}
