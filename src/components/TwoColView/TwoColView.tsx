import { Children, PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import styles from './style';

interface TwoColViewProps extends PropsWithChildren {
  colSpacing?: number;
  style?: StyleProp<ViewStyle>;
};

const TwoColView = ({ children, colSpacing, style }: TwoColViewProps) => {
  const childrenArr = Children.toArray(children);
  const colLeftStyle = [
    styles.column,
    {
      paddingRight: colSpacing ? colSpacing / 2 : 0,
    }
  ];
  const colRightStyle = [
    styles.column,
    {
      paddingLeft: colSpacing ? colSpacing / 2 : 0,
    }
  ];

  return (
    <View style={[styles.container, style]}>
      <View style={colLeftStyle}>
        {childrenArr[0]}
      </View>
      <View style={colRightStyle}>
        {childrenArr[1]}
      </View>
    </View>
  );
};

export default TwoColView;
