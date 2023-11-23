import { StyleSheet } from 'react-native';

import theme from '@app/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.smallMargin,
    backgroundColor: theme.colors.menuHeaderBackground,
  },
  titleText: {
    fontSize: theme.typography.stdFontSize,
  },
});

export default styles;
