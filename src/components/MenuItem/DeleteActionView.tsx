import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { OnDeleteItemCallback } from './types';
import styles from './style';

interface DeleteActionViewProps {
  onDelete: () => void;
}

const DeleteActionView = ({ onDelete }: DeleteActionViewProps) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.deleteActionContainer}>
        <Text style={styles.deleteActionText}>Delete</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeleteActionView;
