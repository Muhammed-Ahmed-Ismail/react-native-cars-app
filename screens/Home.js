import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Car from "../components/car";
import empty from "../assets/empty.png";

export default function Home({ navigation }) {
  const [cars, setCars] = useState([
    {
      name: "Bentley GT V8",
      model: "Continental",
      brand:
        "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/91080d6df903665829ec2b40e5504933",
      image:
        "https://www.ccarprice.com/products/Bentley-Continental-GT-V8-Coupe-1st-Edition-2020.jpg",
      description:
        "Here is the description of the Bentley car Here is the description of the Bentley car Here is the description of the Bentley car Here is the description of the Bentley car Here is the description of the Bentley carHere is the description of the Bentley car Here is the description of the Bentley car  Here is the description of the Bentley car Here is the description of the Bentley car",
    },
    {
      name: "Mercedes c180",
      model: "C Class",
      brand:
        "http://cdn.shopify.com/s/files/1/0566/4253/5617/collections/Car_Brand_Logos-05_256x256_crop_center_31a842fe-5fbb-48a6-928f-62df2e1628c1_1200x1200.png?v=1636752478",
      image:
        "https://media.hatla2eestatic.com/uploads/ncarmodel/8603/big-up_e83b12ed62eca84c801af387af5717a5.png",
      description:
        "Here is the description of the Mercedes car Here is the description of the Mercedes car Here is the description of the Mercedes car Here is the description of the Mercedes car v Here is the description of the Mercedes car Here is the description of the Mercedes car v Here is the description of the Mercedes car v",
    },
    {
      name: "BMW X6",
      model: "X Series",
      brand:
        "https://i.pinimg.com/favicons/17fdb577ca9f2965902eff6a66c9d1b626ee4a2ea308b41d5bc4cc80.png?64c5ef3a86f55475045b2c705a70196f",
      image:
        "https://media.hatla2eestatic.com/uploads/ncarmodel/6748/big-up_935dadd71507a84c9ebc6acb259fc7dd.png",
      description:
        "Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car  ",
    },
  ]);

  const removeCar = (index) => {
    const tempCars = [...cars];
    tempCars.splice(index, 1);
    setCars(tempCars);
  };

  return (
    <View style={styles.container}>
      {cars.length > 0 ? (
        <ScrollView
          style={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}
        >
          {cars.map((car, index) => {
            return (
              <Car
                car={car}
                key={index}
                navigation={navigation}
                deleteCar={removeCar}
              />
            );
          })}
          <StatusBar style="auto" />
        </ScrollView>
      ) : (
        <View style={styles.emptyWrapper}>
          <Image style={styles.emptyImage} source={empty} />
          <Text style={styles.emptyText}>No cars yet</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollWrapper: {
    marginBottom: 20,
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  emptyImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
    resizeMode: "contain",
  },
  emptyText: {
    fontSize: 20,
  },
});
