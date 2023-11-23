import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';

interface DiscountItemProps {
  title: string;
  isChecked?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const DiscountItem = ({ title, isChecked, onPress, style }: DiscountItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Text style={styles.nameText}>{title}</Text>
      <Text style={[styles.checkMark, !!isChecked && styles.showCheckMark]}>✓</Text>
    </TouchableOpacity>
  );
};

export default DiscountItem;
