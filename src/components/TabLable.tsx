import { Text } from '@gluestack-ui/themed';
import { COLORS } from 'styles';


type TabLabelProps = {
  focused: boolean;
  color: string;
  text: string;
};

export default ({ color, focused, text }: TabLabelProps) => {
  return (
    <Text
      fontSize={13}
      fontWeight={focused ? 'normal' : 'normal'}
      color={focused ? COLORS.theme[300] : '#000'}>
      {text}
    </Text>
  );
};
