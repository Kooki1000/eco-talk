import { Heart } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import { useLikePost, useUnlikePost } from '@/api/likes';
import { translate } from '@/i18n';
import { useAuth } from '@/providers/auth-provider';
import type { DetailedPost } from '@/types/types';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

const LikePostComponent = ({ post }: { post: DetailedPost }) => {
  const { profile } = useAuth();

  const { mutate: likePost } = useLikePost();
  const { mutate: unlikePost } = useUnlikePost();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onLike = () => {
    if (!profile) {
      Alert.alert(
        translate('requireAuth.warning'),
        translate('requireAuth.like')
      );
    }

    if (post.isLiked) {
      unlikePost(
        { userId: profile?.id ?? '', postId: post.id },
        {
          onSuccess: () => {
            post.isLiked = false;
            post.like_count -= 1;
          },
        }
      );

      return;
    }

    likePost(
      { userId: profile?.id ?? '', postId: post.id },
      {
        onSuccess: () => {
          post.isLiked = true;
          post.like_count += 1;
        },
      }
    );
  };

  return (
    <TouchableOpacity onPress={onLike} className="flex-row items-center">
      {post.isLiked ? (
        <Heart color={'none'} fill={'#ff0000'} />
      ) : (
        <Heart color={isDark ? white : black} />
      )}
      <Text className="ml-2 text-lg">{post.like_count}</Text>
    </TouchableOpacity>
  );
};

export const LikePost = memo(LikePostComponent);
