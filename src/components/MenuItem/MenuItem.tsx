import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { MenuItem as MenuItemType, OnItemPress } from '@app/types';

import styles from './style';
import { renderRightActions } from './util';
import { OnDeleteItemCallback } from './types';
import { useRef } from 'react';

interface MenuItemProps {
  menuItem: MenuItemType,
  onPress?: OnItemPress;
  onDelete?: OnDeleteItemCallback;
  style?: StyleProp<ViewStyle>;
};

const MenuItem = ({ menuItem, onPress, onDelete, style }: MenuItemProps) => {
  const swipableRef = useRef(null);
  const swipableProps = {
    ...onDelete
    ? {
      ref: swipableRef,
      renderRightActions: renderRightActions(() => onDelete(menuItem.id)),
      overshootRight: false,
    }
    : {}
  };

  return (
    <Swipeable
      {...swipableProps}
    >
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => onPress?.(menuItem.id)}
        activeOpacity={onPress ? 0.5 : 1}
      >
        <Text style={styles.text}>{menuItem.name}</Text>
        <Text style={styles.text}>{`$${menuItem.price}`}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default MenuItem;
