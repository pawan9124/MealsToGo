import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { RestaurantScreen } from "../../features/restaurant/screens/restaurant.screen";
import { RestaurantDetailsScreen } from "../../features/restaurant/screens/restaurantDetails.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDeatail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
