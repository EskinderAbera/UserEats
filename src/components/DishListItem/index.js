import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Dish", { id: dish.id })}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 7,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 80,
    aspectRatio: 1,
  },
});
