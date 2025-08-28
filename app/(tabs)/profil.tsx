import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Profil() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Use a local image instead of requiring a remote URL */}
        <Image source={require('../../assets/images/profil.png')} style={styles.avatar} />
        <Text style={styles.name}>Nama: Yaumul Furqan</Text>
        <Text style={styles.field}>NIM: 105841106822</Text>
        <Text style={styles.field}>Kelas: B</Text>
        <Text style={styles.field}>Jurusan: Informatika</Text>
        <Text style={styles.field}>Fakultas: Fakultas Teknik</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  field: {
    fontSize: 14,
    marginBottom: 4,
  },
});
