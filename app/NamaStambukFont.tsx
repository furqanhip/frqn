import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

// Daftar nama disembunyikan sesuai permintaan
const daftarNama: string[] = [];

// Konfigurasi font: 5 statis + 5 variable (total 10)
const fontConfig = [
  // 5 static
  {
    family: "BarlowCondensed-Bold",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Barlow_Condensed/BarlowCondensed-Bold.ttf"),
  },
  {
    family: "BarlowCondensed-Regular",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Barlow_Condensed/BarlowCondensed-Regular.ttf"),
  },
  {
    family: "BarlowCondensed-Light",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Barlow_Condensed/BarlowCondensed-Light.ttf"),
  },
  {
    family: "Ubuntu-Bold",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Ubuntu/Ubuntu-Bold.ttf"),
  },
  {
    family: "Ubuntu-Regular",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Ubuntu/Ubuntu-Regular.ttf"),
  },
  // 5 variable
  {
    family: "Arimo-Variable",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Arimo/Arimo-VariableFont_wght.ttf"),
  },
  {
    family: "Commissioner-Variable",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Commissioner/Commissioner-VariableFont_FLAR,VOLM,slnt,wght.ttf"),
  },
  {
    family: "Dosis-Variable",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Dosis/Dosis-VariableFont_wght.ttf"),
  },
  {
    family: "Karla-Variable",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Karla/Karla-VariableFont_wght.ttf"),
  },
  {
    family: "Quicksand-Variable",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Quicksand/Quicksand-VariableFont_wght.ttf"),
  },
];

// Export font helpers
export const fontFamilies = fontConfig.map((f) => f.family);
export const fontsToLoad: { [key: string]: any } = fontConfig.reduce((acc, f) => {
  acc[f.family] = f.file;
  return acc;
}, {} as { [key: string]: any });

export default function NamaStambukFont({ urutanStambuk = 5, fontsLoaded = true }: { urutanStambuk?: number; fontsLoaded?: boolean }) {
  // fontsLoaded diberikan dari index.tsx
  if (!fontsLoaded) return <Text>Loading fonts...</Text>;

  // Hitung 10 nama: 5 sebelum dan 5 setelah urutanStambuk (wrap-around)
  const total = daftarNama.length;
  if (total === 0) return null; // nothing to render when no names
  const idx = ((urutanStambuk - 1) + total) % total;
  const before = Array.from({ length: 5 }, (_, i) => (idx - (i + 1) + total) % total).reverse();
  const after = Array.from({ length: 5 }, (_, i) => (idx + (i + 1)) % total);
  const indices = [...before, ...after]; // 10 indices

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {indices.map((i, idxFont) => (
        <Text
          key={i}
          style={{
            // assign one-to-one font by index (no modulo) to ensure distinct fonts for 10 names
            fontFamily: fontFamilies[idxFont] || undefined,
            fontSize: 20,
            marginVertical: 6,
          }}
        >
          {daftarNama[i]}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
