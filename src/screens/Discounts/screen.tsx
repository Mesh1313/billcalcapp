import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from '@app/components/Container';
import { ScreenHeader } from '@app/components/ScreenHeader';
import { DiscountItem } from '@app/components/DiscountItem';
import { ButtonOption, Discount, DiscountId } from '@app/types';

interface DiscountsScreenViewProps {
  discounts: Discount[];
  selectedDiscountIds: DiscountId[];
  onSelectDiscount: (id: DiscountId) => void;
}

const DiscountsScreenView = ({ discounts, selectedDiscountIds, onSelectDiscount }: DiscountsScreenViewProps) => {
  const navigation = useNavigation();
  const navigateBack = useCallback(
    () => navigation.goBack(),
    [navigation]
  );

  const headerButtonOptions = useMemo<ButtonOption>(() => ({
    title: 'Done',
    onPress: navigateBack
  }), []);

  const onDiscountItemPress = useCallback((id: any) => () => onSelectDiscount(id), []);

  return (
    <Container>
      <ScreenHeader
        button={headerButtonOptions}
      />

      {
        discounts.map((discount) => {
          return (
            <DiscountItem
              key={discount.id}
              title={discount.name}
              isChecked={selectedDiscountIds.includes(discount.id)}
              onPress={onDiscountItemPress(discount.id)}
            />      
          );
        })
      }
    </Container>
  );
};

export default DiscountsScreenView;
