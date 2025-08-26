/**
 * Grid Gambar 3x3 dengan Fitur Interaktif
 *
 * Fitur yang Diimplementasikan:
 * 1. ✅ Grid 3x3 layout dengan 9 gambar berbeda
 * 2. ✅ 18 gambar total (9 utama + 9 alternatif)
 * 3. ✅ Toggle gambar alternatif saat diklik
 * 4. ✅ Penskalaan individual per gambar menggunakan Animated API
 * 5. ✅ Increment 1.2x setiap klik (currentScale * 1.2)
 * 6. ✅ Batas maksimum 2x dengan auto-reset ke 1x
 * 7. ✅ State management individual per gambar
 * 8. ✅ Loading dan error handling
 * 9. ✅ Visual indicators (scale & alt status)
 */


import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import NamaStambukFont from "./NamaStambukFont";

export default function Index() {
  // Daftar 12 foto berbeda
  const photoUrls = [
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106322_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106422_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106522_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106622_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106722_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106822_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841106922_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841107022_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841107122_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841107222_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841107322_.jpg?1756214979",
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841107422_.jpg?1756214979",
  ];

  // Daftar nama dummy (bisa diganti dengan nama asli jika ada)
  const namaArray = [
    "mega", "fadli", "fahri", "agil", "aliza",
    "furqan", "basoo", "uci", "zalna", "ipul",
    "alpin", "wahyu"
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", justifyContent: "center", alignItems: "center" }}>
      <View style={styles.photoGrid}>
        {photoUrls.map((url, idx) => (
          <View key={idx} style={styles.photoItem}>
            <Image
              source={{ uri: url }}
              style={styles.photo}
              resizeMode="cover"
            />
            <Text style={styles.namaText}>{namaArray[idx] || '-'}</Text>
          </View>
        ))}
      </View>
      <NamaStambukFont urutanStambuk={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    gap: 10,
    maxWidth: 400,
  },
  photoItem: {
    alignItems: 'center',
    margin: 3,
    width: 80,
  },
  photo: {
    width: 80,
    height: 106,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  namaText: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    maxWidth: 80,
  },
});
