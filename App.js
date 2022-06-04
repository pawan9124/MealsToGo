import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/themes";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCV8NsuxFhRIVyIckMOAeXbGH-2-vfhBGk",
  authDomain: "mealstogo-e990f.firebaseapp.com",
  projectId: "mealstogo-e990f",
  storageBucket: "mealstogo-e990f.appspot.com",
  messagingSenderId: "329290314364",
  appId: "1:329290314364:web:e1e8507512ef9ac9274ff9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [oswaldLoaded] = useOswaldFont({ Oswald_400Regular });
  const [latoLoaded] = useLatoFont({ Lato_400Regular });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Authetication input
  // if (!isAuthenticated) {
  //   return null;
  // }

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
