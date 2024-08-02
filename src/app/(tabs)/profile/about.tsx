import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from '@/components/obytes';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text
            style={styles.heading}
            tx="about.about.about"
            className="text-2xl font-bold"
          />
          <Text
            style={styles.body}
            tx="about.about.content"
            className="text-1xl"
          />
          <Text
            style={styles.heading}
            tx="about.terms.terms"
            className="text-2xl font-bold"
          />
          <Text
            style={styles.body}
            tx="about.terms.content"
            className="text-1xl"
          />
          <Text
            style={styles.heading}
            tx="about.policy.policy"
            className="text-2xl font-bold"
          />
          <Text
            style={styles.body}
            tx="about.policy.content"
            className="text-1xl"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 0,
    alignItems: 'center',
  },
  heading: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  body: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 4,
  },
});
