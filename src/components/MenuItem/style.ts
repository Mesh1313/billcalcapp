import { StyleSheet } from 'react-native';

import theme from '@app/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.mediumMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: theme.typography.stdFontSize,
  },
  deleteActionContainer: {
    backgroundColor: theme.colors.red,
    height: '100%',
    padding: theme.spacing.smallMargin,
  },
  deleteActionText: {
    fontSize: theme.typography.stdFontSize,
    color: theme.colors.white,
    textTransform: 'uppercase',
  },
});

export default styles;
