import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

SplashScreen.preventAutoHideAsync();
//melarang agar tidak tertutup otomatis sebelum disuruh berhenti

export default function RootLayout() {
  const [ loaded, error ] = useFonts({
  // Map keys to actual files available in assets/fonts
  "Font1-Medium": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Arimo/Arimo-VariableFont_wght.ttf"),
  "Font2-Cursive-Bold": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Barlow_Condensed/BarlowCondensed-Bold.ttf"),
  "Font3-BoldItalic": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Arimo/Arimo-Italic-VariableFont_wght.ttf"),
  "Font7-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  "Font8-BoldItalic": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Barlow_Condensed/BarlowCondensed-BoldItalic.ttf"),

  // Variable Fonts (use available variable font files)
  "Font4-Variable": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Commissioner/Commissioner-VariableFont_FLAR,VOLM,slnt,wght.ttf"),
  "Font5-Variable": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Dosis/Dosis-VariableFont_wght.ttf"),
  "Font6-Variable": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Karla/Karla-VariableFont_wght.ttf"),
  "Font9-Variable": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Libre_Franklin/LibreFranklin-VariableFont_wght.ttf"),
  "Font10-Variable": require("../assets/fonts/Arimo,Barlow_Condensed,Commissioner,Dosis,Karla,etc/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf"),

  // Font tambahan (opsional)
  "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

React.useEffect(() => {
  if (loaded && error == null) {
    SplashScreen.hideAsync();
  }
}, [loaded, error]);

if (!loaded && !error) {
  return null;
}


  return <Stack />;
}
