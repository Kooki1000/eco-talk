import { memo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UserInfoHeader from '../headers/userInfoHeader';

interface PostsContainerProps {
  children: React.ReactNode;
}

const PostsContainerComponent = ({ children }: PostsContainerProps) => {
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
      {children}
    </View>
  );
};

export const PostContainer = memo(PostsContainerComponent);
