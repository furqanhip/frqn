import { useLocalSearchParams, useNavigation } from 'expo-router';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import students from '../../data/students';

export default function StudentDetail() {
  const params = useLocalSearchParams();
  const nim = String(params.nim || '');
  const student = students.find((s) => s.nim === nim);

  if (!student) {
    return (
      <View style={styles.center}>
        <Text>Mahasiswa tidak ditemukan.</Text>
      </View>
    );
  }

  // set header title to student's name (so the header doesn't show the raw route like "students/[nim]")
  const navigation = useNavigation();
  React.useEffect(() => {
    if (student) {
      try {
        (navigation as any).setOptions({ title: student.name });
      } catch (e) {
        // setOptions may not be available in some web dev layouts; ignore safely
      }
    }
  }, [navigation, student]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: student.photo }} style={styles.photo} />
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.field}>NIM: {student.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  photo: { width: 180, height: 240, borderRadius: 8, marginBottom: 12, backgroundColor: '#eee' },
  name: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  field: { fontSize: 14 },
});
