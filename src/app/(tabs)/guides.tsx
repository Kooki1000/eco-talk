import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '@/components/header';
import { Text } from '@/components/obytes';

export default function GuidesScreen() {
  return (
    <SafeAreaView>
      <Header style={styles.header} />
      <ScrollView>
        <View style={styles.container} className="mb-16 mt-7">
          <View>
            <Text
              tx="guides.title"
              className="text-center text-4xl font-bold"
            />
          </View>
          <View
            style={styles.sticker}
            className="mb-3 mt-4 size-fit self-center rounded-lg bg-ivory px-3 dark:bg-green"
          >
            <Text
              tx="guides.what.title"
              className="text-2xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.what.content"
              style={styles.content}
              className="text-1xl leading-6"
            />
          </View>
          <View
            style={styles.sticker}
            className="my-3 size-fit self-center rounded-lg bg-silver px-3 dark:bg-pink"
          >
            <Text
              tx="guides.why.title"
              className="text-2xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.why.content"
              style={styles.content}
              className="text-1xl leading-6"
            />
          </View>
          <View
            style={styles.sticker}
            className="my-3 size-fit self-center rounded-lg bg-beige px-3 dark:bg-orange"
          >
            <Text
              tx="guides.how.title"
              className="text-2xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.how.content"
              style={styles.content}
              className="text-1xl leading-6"
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
