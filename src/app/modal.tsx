import { useCallback } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { View } from '@/components/themed';
import { useSelectedLanguage } from '@/i18n';
import type { Language } from '@/i18n/resources';
import { StatusBar, Text } from '@/ui';

export default function ModalScreen() {
  const { setLanguage } = useSelectedLanguage();
  const onSelect = useCallback(
    (lang: Language) => setLanguage(lang),
    [setLanguage]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title} tx="language.title" />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text onPress={() => onSelect('en')}>English</Text>
      <Text onPress={() => onSelect('jp')}>Japanese</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
