import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { Spacer } from "../spacer/spacer.components";
import { TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact_restaurant_info";
import { Text } from "../typography/typography.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDeatail", { restaurant: restaurant })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} isNoMap={true} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
    // <Text>Hell to the dome</Text>
  );
};
