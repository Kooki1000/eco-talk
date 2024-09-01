import { Heart } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import { useLikePost, useUnlikePost } from '@/api/likes';
import { translate } from '@/i18n';
import { useAuth } from '@/providers/auth-provider';
import type { DetailedReply } from '@/types/types';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

const LikeReplyComponent = ({ reply }: { reply: DetailedReply }) => {
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

    if (reply.isLiked) {
      unlikePost(
        { userId: profile?.id ?? '', postId: reply.id },
        {
          onSuccess: () => {
            reply.isLiked = false;
            reply.like_count -= 1;
          },
        }
      );

      return;
    }

    likePost(
      { userId: profile?.id ?? '', postId: reply.id },
      {
        onSuccess: () => {
          reply.isLiked = true;
          reply.like_count += 1;
        },
      }
    );
  };

  return (
    <TouchableOpacity onPress={onLike} className="flex-row items-center">
      {reply.isLiked ? (
        <Heart color={'none'} fill={'#ff0000'} />
      ) : (
        <Heart color={isDark ? white : black} />
      )}
      <Text className="ml-2 text-lg">{reply.like_count}</Text>
    </TouchableOpacity>
  );
};

export const LikeReply = memo(LikeReplyComponent);
