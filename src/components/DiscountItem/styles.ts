import { StyleSheet } from 'react-native';

import theme from '@app/theme';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingBottom: theme.spacing.smallMargin,
    marginBottom: theme.spacing.mediumMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: theme.typography.stdFontSize,
  },
  checkMark: {
    fontSize: theme.typography.largeFontSize,
    opacity: 0,
  },
  showCheckMark: {
    opacity: 1,
  },
});

export default styles;
