import React from "react";
import { View, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetails = ({ navigation }) => {
  const route = useRoute();

  const { id } = route.params;
  console.warn(id);

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
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetails;
