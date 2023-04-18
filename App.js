import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetails";
import DishDetailScreen from "./src/screens/DishDetailScreen/Index";
import Basket from "./src/screens/Basket/Index";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetailScreen /> */}
      {/* <Basket /> */}
      {/* <OrdersScreen /> */}
      <OrderDetails />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
});
