import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { SafeAreaView, Text } from '@/components/obytes';
import UserInfoHeader from '@/components/userInfoHeader';

export default function GuidesScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <UserInfoHeader style={styles.header} />

      <ScrollView className="mb-6 mt-3">
        <View style={styles.container} className="mb-16 mt-8">
          <Text tx="guides.title" className="text-center text-2xl font-bold" />

          <View
            style={styles.sticker}
            className="mb-3 mt-4 size-fit self-center rounded-lg bg-green-100 px-3 dark:bg-green-400"
          >
            <Text
              tx="guides.what.title"
              className="text-xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.what.content"
              style={styles.content}
              className="leading-6"
            />
          </View>

          <View
            style={styles.sticker}
            className="my-3 size-fit self-center rounded-lg bg-red-100 px-3 dark:bg-red-400"
          >
            <Text
              tx="guides.why.title"
              className="text-xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.why.content"
              style={styles.content}
              className="leading-6"
            />
          </View>

          <View
            style={styles.sticker}
            className="my-3 size-fit self-center rounded-lg bg-orange-100 px-3 dark:bg-orange-400"
          >
            <Text
              tx="guides.how.title"
              className="text-xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.how.content"
              style={styles.content}
              className="leading-6"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    alignItems: 'center',
  },
  header: {
    position: 'relative',
    top: 0,
  },
  sticker: {
    marginLeft: 16,
    marginRight: 16,
  },
  question: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  content: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
});
