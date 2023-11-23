import { StyleProp, Text, View, ViewStyle } from 'react-native';
import styles from './style';

interface MenuHeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
};

const MenuHeader = ({ title }: MenuHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default MenuHeader;
