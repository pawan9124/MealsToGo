import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Platform, Image } from "react-native";
import { Text } from "../typography/typography.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactImageAndroid = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image1 = isMap && isAndroid ? CompactImageAndroid : CompactImage;
  return (
    <Item>
      <Image1 source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
