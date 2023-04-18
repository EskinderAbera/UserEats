import React from "react";
import { View, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

const restaurant = restaurants[0];

const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={40}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetails;
