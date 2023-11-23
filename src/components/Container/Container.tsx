import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

interface ContainerProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
};

const Container = ({ children, style }: ContainerProps) => {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={[styles.container, style]}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;
