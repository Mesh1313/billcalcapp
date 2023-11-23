import { SafeAreaProvider } from "react-native-safe-area-context";

const withNavigationContainer = <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props) => {
    return (
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    );
  };

export default withNavigationContainer;
