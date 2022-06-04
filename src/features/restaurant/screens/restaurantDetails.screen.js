import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safearea.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          tilte="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Cheese Sandwich" />
          <List.Item title="Beckon Omlet" />
        </List.Accordion>
        <List.Accordion
          tilte="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Salsa Chicken" />
          <List.Item title="Fried Rice" />
          <List.Item title="Ham Burger" />
        </List.Accordion>
        <List.Accordion
          tilte="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Chicken Skillet" />
          <List.Item title="Roasted Turkey" />
          <List.Item title="Chicken Curry" />
          <List.Item title="Noodles Manchurian" />
        </List.Accordion>
        <List.Accordion
          tilte="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Tea" />
          <List.Item title="Coffe" />
          <List.Item title="Cola" />
          <List.Item title="Beer" />
          <List.Item title="Wine" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
