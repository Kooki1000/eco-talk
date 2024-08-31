import { Link } from 'expo-router';
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { useAuth } from '@/providers/auth-provider';

import { Image, Text } from '../obytes';

interface Props extends ViewProps {
  className?: string;
}

const UserInfoHeader = ({ style, className }: Props) => {
  const { profile } = useAuth();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[style, styles.container]} className={className}>
      <View style={styles.leftContainer}>
        <Link href={'/(tabs)/profile'} asChild>
          {profile?.avatar ? (
            <Link href={'/(tabs)/profile'} asChild>
              <Image
                source={{ uri: profile.avatar }}
                contentFit="cover"
                style={{ width: 40, height: 40, borderRadius: 20 }}
                cachePolicy={'disk'}
              />
            </Link>
          ) : (
            <CircleUserRound
              color={isDark ? 'white' : 'black'}
              size={40}
              strokeWidth={1}
            />
          )}
        </Link>
      </View>

      <View style={styles.rightContainer}>
        <Text tx="city.chiyoda" className="text-lg" />
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
    width: '100%',
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

export default UserInfoHeader;
