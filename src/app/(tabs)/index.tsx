import { CalendarCheck } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Calendar } from '@/components/calendar';
import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import UserInfoHeader from '@/components/userInfoHeader';
import { dayData } from '@/constants/dummyData';

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <UserInfoHeader style={styles.header} />
      <ScrollView>
        <Text tx="home.title" className="mt-8 self-center text-4xl font-bold" />
        <View style={styles.container}>
          <CalendarCheck
            color={isDark ? white : black}
            size={42}
            strokeWidth={1}
          />
          <Text tx="home.upcoming" className="ml-2 text-xl font-medium" />
        </View>
        <View className="mb-20 items-center rounded-lg">
          {dayData.map((day, index) => (
            <Calendar
              key={index}
              variant={day.variant}
              text="calendar.Recyclable"
              days={[
                {
                  date: day.date,
                  dayOfWeek: day.dayOfWeek,
                },
              ]}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
  },
  container: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
