import { useEffect } from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { withNavigationContainer, withRecoil, withSafeAreaProvider } from '@app/hoc';
import { RootNavigator } from '@app/navigators';
import { setAppData } from '@app/services/app';


const RootScreen = () => {
  useEffect(() => {
    // Setting App Data
    setAppData();
  }, []);

  return (
    <RootNavigator />
  );
};

export default (
  withRecoil(
    withSafeAreaProvider (
      withNavigationContainer(
        gestureHandlerRootHOC(
          RootScreen
        )
      )
    )
  )
);
