import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurant/screens/restaurant.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import { theme } from "./src/infrastructure/themes";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safearea.component";

const Tab = createBottomTabNavigator();

const SettingScreen = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);
const MapScreen = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [oswaldLoaded] = useOswaldFont({ Oswald_400Regular });
  const [latoLoaded] = useLatoFont({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = focused ? "restaurant" : "restaurant-outline";
                    } else if (route.name === "Settings") {
                      iconName = focused ? "settings" : "settings-outline";
                    } else if (route.name === "Map") {
                      iconName = focused ? "map" : "map-outline";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                })}
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen
                  name="Restaurants"
                  component={() => <RestaurantScreen />}
                />
                <Tab.Screen name="Map" component={() => <MapScreen />} />
                <Tab.Screen
                  name="Settings"
                  component={() => <SettingScreen />}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
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
