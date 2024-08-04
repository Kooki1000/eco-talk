import { router } from 'expo-router';
import { CircleUserRound, Send, X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import PlaceHolder from '@/components/placeHolder';

export default function AddPostScreen() {
  const [text, setText] = useState('');
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const onXPress = () => {
    router.back();
  };
  const onPostPress = () => {
    console.log('post content: ' + text);
    router.navigate('/posts');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onXPress}
          className="flex-row justify-center"
        >
          <X color={isDark ? white : black} size={35} strokeWidth={1} />
        </TouchableOpacity>
        <Text className="text-lg">Yokohama City</Text>
        <TouchableOpacity
          onPress={onPostPress}
          className="flex-row justify-center"
        >
          <Send color={isDark ? white : black} size={28} strokeWidth={1} />
        </TouchableOpacity>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        contentContainerStyle={styles.content}
      >
        <CircleUserRound
          color={isDark ? white : black}
          size={48}
          strokeWidth={1}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <PlaceHolder
            style={[styles.input, { color: isDark ? 'white' : 'black' }]}
            placeholderKey="add.insert"
            multiline
            onChangeText={(newText) => setText(newText)}
            textAlign="left"
            className="text-base font-normal"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 0,
  },
  content: {
    position: 'relative',
    top: 0,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    alignContent: 'center',
  },
  input: {
    marginTop: 7,
    paddingLeft: 16,
    paddingRight: 60,
  },
  header: {
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#CBBDBD',
    paddingBottom: 13,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
