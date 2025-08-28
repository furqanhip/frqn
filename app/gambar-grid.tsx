import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Fungsi untuk generate image pairs menggunakan perulangan
const bas69GenerateImagePairs = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
  const altURL = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090b.gif';

  const pairs: { main: string; alt: string; nimNumber: number }[] = [];

  // Generate untuk NIM 64-73 (11 gambar total, mencakup 5 sebelum + NIM Anda + 5 setelah)
  for (let i = 64; i <= 73; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = altURL; // semua alternatif sama
    pairs.push({ main, alt, nimNumber: i });
  }

  return pairs;
};

const bas69ImagePairs = bas69GenerateImagePairs();

// Font list sesuai persyaratan: 5 Static + 5 Variable = 10 font
const fontList = [
  // 5 Static Fonts (file terpisah untuk setiap font-weight)
  'Font1-Medium',
  'Font2-Cursive-Bold',
  'Font3-BoldItalic',
  'Font7-Regular',
  'Font8-BoldItalic',

  // 5 Variable Fonts (1 file mendukung banyak font-weight)
  'Font4-Variable',
  'Font5-Variable',
  'Font6-Variable',
  'Font9-Variable',
  'Font10-Variable',
];

export default function Bas69GambarGrid() {
  const [bas69States, setBas69States] = useState(
    bas69ImagePairs.map(() => ({ scale: 1, isAlt: false }))
  );

  const bas69HandlePress = (index: number) => {
    setBas69States((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <ScrollView style={bas69Styles.container}>
      {/* Header */}
      <View style={bas69Styles.header}>
        <Text style={bas69Styles.headerTitle}>📸 Galeri Foto Mahasiswa</Text>
        <Text style={bas69Styles.headerSubtitle}>NIM 64-73 dengan 10 Font (5 Static + 5 Variable)</Text>
        <Text style={bas69Styles.yourNimHighlight}>🎯 NIM Anda: 69 (Baso Hamzah)</Text>
      </View>

      {/* Info Panel */}
      <View style={bas69Styles.infoPanel}>
        <Text style={bas69Styles.infoPanelTitle}>ℹ️ Cara Penggunaan:</Text>
        <Text style={bas69Styles.infoPanelText}>• Tekan gambar untuk memperbesar dan mengubah ke alternatif</Text>
        <Text style={bas69Styles.infoPanelText}>• Setiap NIM menggunakan font yang berbeda</Text>
        <Text style={bas69Styles.infoPanelText}>• Gambar akan berubah dan beranimasi saat ditekan</Text>
      </View>

      {/* Grid Images */}
      <View style={bas69Styles.grid}>
        {bas69ImagePairs.map((pair, index) => {
          // Assign font menggunakan perulangan modulo
          const currentFont = fontList[index % fontList.length];
          const state = bas69States[index];

          return (
            <View key={index} style={bas69Styles.imageContainer}>
              {/* Label NIM dengan font berbeda */}
              <View style={bas69Styles.nimLabel}>
                <Text style={[bas69Styles.nimText, { fontFamily: currentFont }]}>{`NIM ${pair.nimNumber}`}</Text>
                <Text style={bas69Styles.fontLabel}>{currentFont}</Text>
              </View>

              <Pressable onPress={() => bas69HandlePress(index)}>
                <Image
                  source={{ uri: state.isAlt ? pair.alt : pair.main }}
                  style={[bas69Styles.image, { transform: [{ scale: state.scale }] }]}
                />
              </Pressable>

              <View style={bas69Styles.statusContainer}>
                <Text style={bas69Styles.statusText}>{state.isAlt ? 'Alternatif' : 'Utama'}</Text>
                <Text style={bas69Styles.scaleText}>{`Scale: ${state.scale.toFixed(2)}x`}</Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Font mapping info */}
      <View style={bas69Styles.fontMappingContainer}>
        <Text style={bas69Styles.fontMappingTitle}>🎨 Mapping Font untuk Setiap NIM:</Text>
        {bas69ImagePairs.map((pair, index) => {
          const currentFont = fontList[index % fontList.length];
          return (
            <View key={index} style={bas69Styles.fontMappingItem}>
              <Text style={bas69Styles.fontMappingNim}>{`NIM ${pair.nimNumber}`}</Text>
              <Text style={bas69Styles.fontMappingFont}>{currentFont}</Text>
              {pair.nimNumber === 69 && <Text style={bas69Styles.yourNimMarker}> ← Anda</Text>}
            </View>
          );
        })}
      </View>

      {/* Summary */}
      <View style={bas69Styles.summaryContainer}>
        <Text style={bas69Styles.summaryTitle}>📊 Ringkasan Grid:</Text>
        <Text style={bas69Styles.summaryText}>• Total gambar: <Text style={{ fontWeight: 'bold' }}>{bas69ImagePairs.length} buah</Text></Text>
        <Text style={bas69Styles.summaryText}>• Range NIM: <Text style={{ fontWeight: 'bold' }}>64-73 (11 gambar)</Text></Text>
        <Text style={bas69Styles.summaryText}>• Font: <Text style={{ fontWeight: 'bold' }}>5 Static + 5 Variable = 10 font</Text></Text>
        <Text style={bas69Styles.summaryText}>• Cycling: <Text style={{ fontWeight: 'bold' }}>11 gambar menggunakan 10 font (modulo)</Text></Text>
        <Text style={bas69Styles.summaryText}>• Interaktivitas: <Text style={{ fontWeight: 'bold' }}>Scale & Image Toggle</Text></Text>
      </View>
    </ScrollView>
  );
}

const bas69Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196f3',
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
    marginBottom: 10,
  },
  yourNimHighlight: {
    fontSize: 14,
    color: '#ffeb3b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoPanel: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoPanelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoPanelText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    lineHeight: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width / 3 - 20,
    margin: 10,
    alignItems: 'center',
  },
  nimLabel: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
  },
  nimText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  fontLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
  },
  statusContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 6,
    borderRadius: 6,
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  statusText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginBottom: 2,
  },
  scaleText: {
    fontSize: 9,
    color: '#ccc',
    textAlign: 'center',
  },
  fontMappingContainer: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fontMappingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  fontMappingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
  },
  fontMappingNim: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
    minWidth: 60,
  },
  fontMappingFont: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  yourNimMarker: {
    fontSize: 12,
    color: '#ff4444',
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: '#e3f2fd',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2196f3',
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 12,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#1976d2',
    marginBottom: 6,
    lineHeight: 20,
  },
});
