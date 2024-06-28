import { ChevronDown, CircleUserRound } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { Text } from './obytes';
import { black } from './obytes/colors';

interface Props extends ViewProps {
  className?: string;
}

const Header = ({ style, className }: Props) => {
  return (
    <View style={[style, styles.container]} className={className}>
      <View style={styles.leftContainer}>
        <CircleUserRound color={black} size={40} strokeWidth={1} />
      </View>

      <View style={styles.rightContainer}>
        <Text className="text-lg">Yokohama City</Text>
        <ChevronDown color={black} size={32} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#CBBDBD',
    paddingBottom: 8,
  },
  leftContainer: {
    alignItems: 'center',
    marginLeft: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default Header;
