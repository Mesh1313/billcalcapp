import { StyleProp, View, ViewStyle } from 'react-native';

import { ButtonOption } from '@app/types';

import styles from './style';
import { Title } from '../Title';
import { Button } from '../Button';

interface ScreenHeaderProps {
  title?: string,
  button?: ButtonOption;
  style?: StyleProp<ViewStyle>;
};

const ScreenHeader = ({ title, button, style }: ScreenHeaderProps) => {
  const titleText  = title || ' ';

  return (
    <View style={[styles.container, style]}>
      {
        <Title text={titleText} />
      }
      {
        !!(button && button.title) &&
        <View style={styles.buttonContainer}>
          <Button
            title={button.title}
            onPress={button.onPress}
          />
        </View>
      }
    </View>
  );
};

export default ScreenHeader;
