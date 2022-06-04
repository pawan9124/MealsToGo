import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact_restaurant_info";
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
};
