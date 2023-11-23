import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from '@app/theme';
// Screens
import { MainScreen } from '@app/screens/Main';
import { DiscountsScreen } from '@app/screens/Discounts';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: theme.colors.headerBackground },
  title: 'Bill Calculator',
};

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Discounts" component={DiscountsScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
