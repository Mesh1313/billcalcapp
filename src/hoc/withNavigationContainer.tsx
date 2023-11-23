import { NavigationContainer } from "@react-navigation/native";

const withNavigationContainer = <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props) => {
    return (
      <NavigationContainer>
        <Component {...props} />
      </NavigationContainer>
    );
  };

export default withNavigationContainer;
