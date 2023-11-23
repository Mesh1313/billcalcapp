import { StyleSheet } from 'react-native';

import theme from '@app/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.largeMargin,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  }
});

export default styles;
