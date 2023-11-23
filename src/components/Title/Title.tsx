import { StyleProp, Text, TextStyle } from 'react-native';

import styles from './styles';

type ContainerProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

const Title = ({ text, style }: ContainerProps) => {
  return (
    <Text style={[styles.text, style]}>
      {text}
    </Text>
  );
};

export default Title;
