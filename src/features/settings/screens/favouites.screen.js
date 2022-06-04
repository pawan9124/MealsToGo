import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safearea.component";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/typography.component";
import { TouchableOpacity } from "react-native";
import { RestaurantList } from "../../restaurant/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurant/components/restaurant-info-card.component";

const FavouritesSafeArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDeatail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <FavouritesSafeArea>
      <Text center> No Favourites yet</Text>
    </FavouritesSafeArea>
  );
};
