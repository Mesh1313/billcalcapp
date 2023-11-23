import { useCallback, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from '@app/components/Container';
import { TwoColView } from '@app/components/TwoColView';
import { ScreenHeader } from '@app/components/ScreenHeader';
import {
  MenuItem as MenuItemType,
  MenuItemsByCategory,
  OrderItemIdsAndCount
} from '@app/types';

import styles from './styles';
import MenuListView from './MenuListView';
import OrderListView from './OrderListView';
import OrderSummaryView from './OrderSummaryView';
import { OnDeleteItemCallback } from '@app/components/MenuItem/types';

interface MainScreenViewProps {
  menuItemsByCategory: MenuItemsByCategory;
  orderItems: MenuItemType[];
  onItemPress: (id: MenuItemType['id']) => void;
  onItemDelete: OnDeleteItemCallback;
};

const MainScreenView = ({
  menuItemsByCategory,
  orderItems,  
  onItemPress,
  onItemDelete
}: MainScreenViewProps) => {
  const navigation = useNavigation<any>();
  const navigateToDiscounts = useCallback(
    () => navigation.navigate('Discounts'),
    [navigation]
  );
  const screenHeaderButtonOptions = useMemo(() => ({
    title: 'Discounts',
    onPress: navigateToDiscounts
  }), []);

  return (
    <Container>
      <ScreenHeader button={screenHeaderButtonOptions} />

      <TwoColView colSpacing={20}>
        <ScrollView contentContainerStyle={styles.colContentContainer}>
          <MenuListView
            menuItemsByCategory={menuItemsByCategory}
            onItemPress={onItemPress}
          />
        </ScrollView>

        <View style={styles.orderColContainer}>
          <ScrollView
            style={styles.orderScrollView}
            contentContainerStyle={styles.colContentContainer}
          >
            <OrderListView
              orderItems={orderItems}
              onDelete={onItemDelete}
            />
          </ScrollView>

        </View>
      </TwoColView>
      <OrderSummaryView />
    </Container>
  );
};

export default MainScreenView;
