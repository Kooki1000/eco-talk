import { memo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeHeader from '../headers/homeHeader';
import UserInfoHeader from '../headers/userInfoHeader';

interface HomeContainerProps {
  children: React.ReactNode;
}

const HomeContainerComponent = ({ children }: HomeContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        alignItems: 'center',
      }}
    >
      <UserInfoHeader />
      <HomeHeader />
      {children}
    </View>
  );
};

export const HomeContainer = memo(HomeContainerComponent);
