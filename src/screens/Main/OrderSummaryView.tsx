import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { totalSelector } from '@app/state/total';
import { numberToCurrency } from '@app/services/orderCalculator';

import styles from './styles';

const OrderSummaryView = () => {
  const orderData = useRecoilValue(totalSelector);

  return (
    <View style={styles.orderSummaryContainer}>
      <View style={styles.summaryRowContainer}>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryText}>Subtotal</Text>
        </View>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryText}>{`$${numberToCurrency(orderData.subtotal)}`}</Text>
        </View>
      </View>

      <View style={styles.summaryRowContainer}>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryText}>Tax</Text>
        </View>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryText}>{`$${numberToCurrency(orderData.tax)}`}</Text>
        </View>
      </View>

      <View style={styles.summaryRowContainer}>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryText}>Discounts</Text>
        </View>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryText}>{`$${numberToCurrency(orderData.discounts)}`}</Text>
        </View>
      </View>

      <View style={styles.summaryRowContainer}>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryTextTotal}>Total</Text>
        </View>
        <View style={styles.summaryColContainer}>
          <Text style={styles.summaryTextTotal}>{`$${numberToCurrency(orderData.total)}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSummaryView;
