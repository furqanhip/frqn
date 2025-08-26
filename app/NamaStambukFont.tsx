import { useFonts } from "expo-font";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

// Daftar nama contoh (bisa diganti sesuai kebutuhan)
const daftarNama = [
  "Ayu Lestari", "Budi Santoso", "Citra Dewi", "Dewi Anggraini", "Eka Putra",
  "Fajar Pratama", "Gita Sari", "Hadi Wijaya", "Indra Gunawan", "Joko Susilo",
  "Kiki Amelia", "Lina Marlina", "Maya Sari", "Nina Kartika", "Oki Saputra",
  "Putri Ayu", "Qori Rahma", "Rina Sari", "Sari Dewi", "Tono Prabowo",
  "Umar Hadi", "Vina Melati", "Wawan Setiawan", "Xenia Putri", "Yuni Astuti",
  "Zaki Akbar"
];

// Konfigurasi font: 5 statis, 5 variable
const fontConfig = [
  // Statis (Barlow Condensed, Ubuntu)
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
  // Variable
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
    family: "LibreFranklin-Variable",
    file: require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Libre_Franklin/LibreFranklin-VariableFont_wght.ttf"),
  },
];

export default function NamaStambukFont({ urutanStambuk = 5 }: { urutanStambuk?: number }) {
  // Load semua font
  const fontMap: any = {};
  fontConfig.forEach(f => { fontMap[f.family] = f.file; });
  const [fontsLoaded] = useFonts(fontMap);
  if (!fontsLoaded) return <Text>Loading fonts...</Text>;

  // Hitung index mundur dan maju (wrap around)
  const total = daftarNama.length;
  const idx = ((urutanStambuk - 1) + total) % total;
  const before = Array.from({ length: 5 }, (_, i) => (idx - (i + 1) + total) % total).reverse();
  const after = Array.from({ length: 5 }, (_, i) => (idx + (i + 1)) % total);
  const indices = [...before, ...after];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {indices.map((i, idxFont) => (
        <Text
          key={i}
          style={{
            fontFamily: fontConfig[idxFont].family,
            fontSize: 24,
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
