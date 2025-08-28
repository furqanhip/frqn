import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image source={require('../../assets/images/logo_kampus.png')} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.heading}>Tentang Unismuh Makassar</Text>
        <Text style={styles.paragraph}>
          Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah perguruan tinggi yang
          berada di Makassar, Sulawesi Selatan. Unismuh berfokus pada pendidikan tinggi yang
          mengintegrasikan nilai-nilai keislaman dan keunggulan akademik.
        </Text>
        <Text style={styles.paragraph}>Lokasi: Makassar, Sulawesi Selatan</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 14,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    elevation: 2,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 6,
  },
});
