import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Data nama mahasiswa berdasarkan urutan stambuk (5 sebelum dan 5 setelah nim 69)
const studentData = [
  { nim: 64, name: 'Fadli', major: 'Informatika' },
  { nim: 65, name: 'A.FACHRI', major: 'Informatika' },
  { nim: 66, name: 'AGIL', major: 'Informatika' },
  { nim: 67, name: 'ALIZAH NU', major: 'Informatika' },
  { nim: 68, name: 'YAUMUL FURQAN', major: 'Informatika' },
  { nim: 69, name: 'BASO HAMZAH', major: 'Informatika' },
  { nim: 70, name: 'INDAH NUR FAUZIAH', major: 'Informatika' },
  { nim: 71, name: 'ZALNA NUR ISLAMIA', major: 'Informatika' },
  { nim: 72, name: 'IPUL', major: 'Informatika' },
  { nim: 73, name: 'ALPIN', major: 'Informatika' }
];

// Array font sesuai persyaratan: 5 Static + 5 Variable
const fontList = [
  'Font1-Medium',
  'Font2-Cursive-Bold',
  'Font3-BoldItalic',
  'Font7-Regular',
  'Font8-BoldItalic',
  'Font4-Variable',
  'Font5-Variable',
  'Font6-Variable',
  'Font9-Variable',
  'Font10-Variable',
];

// Fungsi untuk generate font mapping menggunakan perulangan
const generateFontMapping = () => {
  const fontMapping: { [key: number]: string } = {};

  for (let i = 0; i < studentData.length; i++) {
    // Assign font menggunakan modulo untuk cycling
    fontMapping[studentData[i].nim] = fontList[i % fontList.length];
  }

  return fontMapping;
};

// Generate font mapping
const nimToFontMap = generateFontMapping();

export default function Bas69NamaList() {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [animationStates, setAnimationStates] = useState(
    studentData.map(() => ({ scale: 1, isPressed: false }))
  );

  const handlePress = (index: number, nim: number) => {
    setSelectedStudent(selectedStudent === nim ? null : nim);

    setAnimationStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return { ...item, isPressed: false };
        return {
          scale: item.scale === 1 ? 1.05 : 1,
          isPressed: !item.isPressed,
        };
      })
    );
  };

  const getFontWeight = (fontName: string): 'normal' | 'bold' => {
    if (fontName.includes('Bold')) return 'bold';
    return 'normal';
  };

  return (
    <ScrollView style={bas69Styles.container}>
      <View style={bas69Styles.header}>
        <Text style={bas69Styles.headerTitle}>🎓 Daftar Mahasiswa Teknik Informatika</Text>
        <Text style={bas69Styles.headerSubtitle}>10 Nama dengan 10 Font Berbeda</Text>
        <Text style={bas69Styles.yourNim}>📋 NIM Anda: 69 (Baso Hamzah)</Text>
      </View>

      <View style={bas69Styles.legendContainer}>
        <Text style={bas69Styles.legendTitle}>Keterangan:</Text>
        <Text style={bas69Styles.legendText}>🔵 Sebelum NIM Anda (64-68)</Text>
        <Text style={bas69Styles.legendText}>🔴 Setelah NIM Anda (70-73)</Text>
      </View>

      {studentData.map((student, index) => {
        const isSelected = selectedStudent === student.nim;
        const currentFont = nimToFontMap[student.nim];
        const isBeforeYou = student.nim < 69;

        return (
          <Pressable
            key={student.nim}
            onPress={() => handlePress(index, student.nim)}
            style={[
              bas69Styles.studentCard,
              {
                transform: [{ scale: animationStates[index].scale }],
                backgroundColor: isSelected ? '#e3f2fd' : 'white',
                borderColor: isBeforeYou ? '#2196f3' : '#f44336',
                borderLeftWidth: 5,
              },
            ]}
          >
            <View style={bas69Styles.studentInfo}>
              <View style={bas69Styles.nimContainer}>
                <Text style={bas69Styles.nimText}>{student.nim}</Text>
                <Text style={[bas69Styles.fontInfo, { fontFamily: currentFont, fontWeight: getFontWeight(currentFont) }]}>{currentFont}</Text>
              </View>

              <Text style={[bas69Styles.nameText, { fontFamily: currentFont }]}>{student.name}</Text>
              <Text style={bas69Styles.majorText}>{student.major}</Text>

              {isSelected && (
                <View style={bas69Styles.detailContainer}>
                  <Text style={bas69Styles.detailText}>Detail untuk {student.name}</Text>
                  <Text style={bas69Styles.detailText}>NIM: {student.nim}</Text>
                  <Text style={bas69Styles.detailText}>Jurusan: {student.major}</Text>
                </View>
              )}
            </View>
          </Pressable>
        );
      })}

      <View style={bas69Styles.fontListContainer}>
        <Text style={bas69Styles.fontListTitle}>📝 Daftar Font yang Digunakan:</Text>
        {fontList.map((font, index) => (
          <View key={font} style={bas69Styles.fontItem}>
            <Text style={bas69Styles.fontNumber}>{index + 1}.</Text>
            <Text style={[bas69Styles.fontName, { fontFamily: font }]}>{font}</Text>
            <Text style={bas69Styles.fontType}>{font.includes('Variable') ? 'Variable' : 'Static'}</Text>
          </View>
        ))}
      </View>

      <View style={bas69Styles.summaryContainer}>
        <Text style={bas69Styles.summaryTitle}>📊 Ringkasan:</Text>
        <Text style={bas69Styles.summaryText}>• Total mahasiswa ditampilkan: <Text style={{ fontWeight: 'bold' }}>10 orang</Text></Text>
        <Text style={bas69Styles.summaryText}>• Font berbeda digunakan: <Text style={{ fontWeight: 'bold' }}>10 font</Text></Text>
        <Text style={bas69Styles.summaryText}>• Sebelum NIM 69: <Text style={{ fontWeight: 'bold', color: '#2196f3' }}>5 orang (64-68)</Text></Text>
        <Text style={bas69Styles.summaryText}>• Setelah NIM 69: <Text style={{ fontWeight: 'bold', color: '#f44336' }}>5 orang (70-73)</Text></Text>
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
    backgroundColor: '#1976d2',
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
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
  yourNim: {
    fontSize: 14,
    color: '#ffeb3b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  legendContainer: {
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
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  studentCard: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  studentInfo: {
    flex: 1,
  },
  nimContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nimText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  fontInfo: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  nameText: {
    fontSize: 20,
    color: '#1976d2',
    marginBottom: 8,
    lineHeight: 26,
  },
  majorText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailContainer: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#4caf50',
  },
  detailText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
    lineHeight: 18,
  },
  fontListContainer: {
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
  fontListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  fontItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  fontNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 10,
    width: 20,
  },
  fontName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  fontType: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  summaryContainer: {
    backgroundColor: '#e8f5e8',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4caf50',
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 12,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 6,
    lineHeight: 20,
  },
});
