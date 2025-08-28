import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FontsDemo() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Font Demo - 10 Fonts Imported</Text>
      </View>

      {/* Font yang sudah ada */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Original Fonts</Text>
        <Text style={[styles.sampleText, { fontFamily: 'fontBas' }]}>fontBas - Halo Kak, Nama Saya Baso Hamzah</Text>
        <Text style={[styles.sampleText, { fontFamily: 'SpaceMono-Regular' }]}>SpaceMono-Regular - Universitas Negeri Makassar</Text>
      </View>

      {/* 5 Static Fonts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Static Fonts (Separate files for each weight)</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font1-Medium' }]}>Font1-Medium - Teknik Informatika Angkatan 2022</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font2-Cursive-Bold' }]}>Font2-Cursive-Bold - Beautiful Cursive Typography</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font3-BoldItalic' }]}>Font3-BoldItalic - Bold and Italic Combined Style</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font7-Regular' }]}>Font7-Regular - Clean and Simple Regular Weight</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font8-BoldItalic' }]}>Font8-BoldItalic - Another Bold Italic Style</Text>
      </View>

      {/* 5 Variable Fonts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Variable Fonts (Multiple weights in one file)</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font4-Variable', fontWeight: '400' }]}>Font4-Variable (Weight 400) - Variable Font Technology</Text>
        <Text style={[styles.sampleText, { fontFamily: 'Font4-Variable', fontWeight: '700' }]}>Font4-Variable (Weight 700) - Same font, different weight</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font5-Variable', fontWeight: '300' }]}>Font5-Variable (Weight 300) - Light Weight Style</Text>
        <Text style={[styles.sampleText, { fontFamily: 'Font5-Variable', fontWeight: '600' }]}>Font5-Variable (Weight 600) - Semi-Bold Weight</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font6-Variable', fontWeight: '400' }]}>Font6-Variable (Width & Weight) - Flexible Typography</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font9-Variable', fontWeight: '500' }]}>Font9-Variable (Weight 500) - Medium Weight Display</Text>
        
        <Text style={[styles.sampleText, { fontFamily: 'Font10-Variable', fontWeight: '800' }]}>Font10-Variable (Weight 800) - Extra Bold Display</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Total: 12 fonts imported (2 original + 5 static + 5 variable)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 5,
  },
  sampleText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    color: '#2c3e50',
  },
  footer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#3498db',
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
