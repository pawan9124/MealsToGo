import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/typography.component";
import {
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  Icon,
  RestaurantInformationCard,
  RestaurantInformationCardCover,
} from "./restaurant-info-card.style";

export const RestaurantInfoCard = ({ restaurant = {}, ...props }) => {
  // console.log("REStuatut", restaurant);
  const {
    name = "My Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://southdenver.com/wp-content/uploads/2014/03/Couple-eating-at-restaurant.jpg",
    ],
    address = "100 alibaba street, forty theives",
    isOpenNow = true,
    rating = 4,
    isOpen = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantInformationCard elevation={5}>
      <RestaurantInformationCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml width="20" height="20" xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpen && <SvgXml width="20" height="20" xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantInformationCard>
  );
};
