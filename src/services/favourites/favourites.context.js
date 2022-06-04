import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const storeFavourites = async (value, uid) => {
    try {
      await AsyncStorage.setItem(`@favourites-${uid}`, JSON.stringify(value));
    } catch (error) {
      console.log("Storing Favourites error", error);
    }
  };
  const fetchFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        // value previously stored
        setFavourites(JSON.parse(value));
      }
    } catch (error) {
      console.log("Reading Favourites Error", error);
      // error reading value
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user) {
      fetchFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      storeFavourites(favourites, user.uid);
    }
  }, [favourites, user]);
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
