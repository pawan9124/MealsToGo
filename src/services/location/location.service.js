import camelize from "camelize";
import { locations } from "./location.mock.js";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (results) => {
  const formattedResponse = camelize(results);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
