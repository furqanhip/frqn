import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import students, { type Student } from '../../data/students';
import { Ionicons } from '@expo/vector-icons';

export default function StudentsList() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((item: Student) => (
  <TouchableOpacity key={item.nim} style={styles.item} onPress={() => (router as any).push(`/students/${item.nim}`)}>
          <Ionicons name="person-circle-outline" size={24} color="#333" style={styles.icon} />
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  icon: { marginRight: 12 },
  name: { fontSize: 16 },
});
