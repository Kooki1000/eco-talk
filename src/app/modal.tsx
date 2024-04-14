import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/themed';
import { translate, useSelectedLanguage } from '@/i18n';
import type { Language } from '@/i18n/resources';

export default function ModalScreen() {
  const { setLanguage } = useSelectedLanguage();
  const onSelect = useCallback(
    (lang: Language) => setLanguage(lang),
    [setLanguage]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translate('language.title')}</Text>
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
