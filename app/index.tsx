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


import * as React from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect root to the Home tab so the tab bar is visible by default
  return <Redirect href="/home" />;
}

