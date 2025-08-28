import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.paragraph}>
          Aplikasi ini dibuat sebagai tugas untuk menampilkan contoh aplikasi mobile sederhana
          menggunakan Expo Router dengan tab bar di bagian bawah. Aplikasi terdiri dari tiga
          halaman: Home, About, dan Profil.
        </Text>

        <Text style={styles.subtitle}>Fungsi tiap halaman</Text>
        <Text style={styles.item}>• Home: Menampilkan informasi tentang Unismuh Makassar dan gambar pendukung.</Text>
        <Text style={styles.item}>• About: Menjelaskan tujuan aplikasi dan fungsi tiap halaman.</Text>
        <Text style={styles.item}>• Profil: Menampilkan data pribadi siswa/mahasiswa beserta foto lokal.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  item: {
    marginTop: 6,
    fontSize: 14,
  },
});
