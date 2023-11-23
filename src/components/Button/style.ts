import { StyleSheet } from 'react-native';

import theme from '@app/theme';

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.xSmallMargin,
  },
  buttonTitle: {
    fontSize: theme.typography.stdFontSize,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default styles;
