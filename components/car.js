import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Car = (props) => {
  const confirmDelete = () =>
    Alert.alert("Remove Car Warning", "Do you want to delete this car?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => props.deleteCar(props.key) },
    ]);

  const { car, navigation } = props;
  return (
    <View style={styles.carWrapper}>
      <View style={styles.car}>
        <Text style={styles.model}>{car.model}</Text>
        <Image
          source={{
            uri: car.brand,
          }}
          style={styles.brand}
        />
        <Image
          source={{
            uri: car.image,
          }}
          style={styles.carImage}
        />

        <TouchableNativeFeedback
          onPress={() => {
            confirmDelete();
          }}
        >
          <View
            style={{
              ...styles.buttonWrapper,
              ...{ top: 25, backgroundColor: "#e74c3c" },
            }}
          >
            <Text style={styles.buttonText}>
              {" "}
              <Ionicons name={"remove-circle"} color={"#fff"} size={26} />{" "}
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate("CarDetails", {
              car: car,
            });
          }}
        >
          <View style={{ ...styles.buttonWrapper, ...{ start: 0 } }}>
            <Text style={styles.buttonText}> View </Text>
          </View>
        </TouchableNativeFeedback>

        <View style={styles.infoWrapper}>
          <Text style={styles.carTitle}>{car.name}</Text>
          <Text style={styles.carDescription} numberOfLines={2}>
            {car.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carWrapper: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    position: "relative",
    overflow: "hidden",
  },
  car: {
    position: "relative",
  },
  carImage: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
  },
  carTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  carDescription: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  infoWrapper: {
    padding: 10,
  },
  model: {
    fontSize: 12,
    color: "#fff",
    backgroundColor: colors.primary,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 0,
    end: 0,
    zIndex: 1,
  },
  brand: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 0,
    start: 0,
    zIndex: 1,
    backgroundColor: "#fff",
    resizeMode: "contain",
  },
  buttonWrapper: {
    position: "absolute",
    end: 0,
    backgroundColor: colors.primary,
    zIndex: 1,
    top: 160,
    minWidth: 30,
    minHeight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Car;
