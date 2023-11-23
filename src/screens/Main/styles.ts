import { StyleSheet } from 'react-native';

import theme from '@app/theme';

const styles = StyleSheet.create({
  colContentContainer: {
    paddingBottom: theme.spacing.mediumMargin,
  },
  orderColContainer: {
    flex: 1,
  },
  orderScrollView: {
    flex: 1,
  },
  orderSummaryContainer: {
    paddingVertical: theme.spacing.mediumMargin,
    borderTopWidth: 1,
    borderColor: theme.colors.menuHeaderBackground,
  },
  summaryRowContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.smallMargin,
  },
  summaryColContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  summaryText: {
    fontSize: theme.typography.stdFontSize,
  },
  summaryTextTotal: {
    fontSize: theme.typography.largeFontSize,
  },
});

export default styles;
