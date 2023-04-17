import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "grey",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
});

export default styles;
