import { Tabs } from 'expo-router';
import * as React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
  <Tabs.Screen name="profil" options={{ title: 'Profil' }} />
  <Tabs.Screen name="students" options={{ title: 'Students' }} />
    </Tabs>
  );
}
