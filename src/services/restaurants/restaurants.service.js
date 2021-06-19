import { mocks, mockImages } from "./mocks";
import camelize from "camelize";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    try {
      const mock = mocks[location];
      if (!mock) reject("Location not found");

      resolve(mocks[location]);
    } catch (error) {
      reject(error);
    }
  });
};

export const transformResult = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = [
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    ];

    console.log(
      " restaurant.photos",
      restaurant.photos,
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};
