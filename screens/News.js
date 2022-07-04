import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constants/colors";

export default function News({ navigation, route }) {
  const [active, setActive] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}
      >
        {users.map((user, index) => {
          return (
            <View style={styles.userWrapper} key={index}>
              <Text style={styles.name}>{user.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 5,
                }}
              >
                <View style={styles.singleRow}>
                  <Ionicons
                    name={"mail"}
                    color={colors.primary}
                    size={20}
                    style={{ marginEnd: 5 }}
                  />
                  <Text style={styles.singleInfo}> {user.email}</Text>
                </View>
                <View style={styles.singleRow}>
                  <Ionicons
                    name={"call"}
                    color={colors.primary}
                    size={20}
                    style={{ marginEnd: 5 }}
                  />
                  <Text style={styles.singleInfo}> {user.phone}</Text>
                </View>
              </View>
              <Text style={styles.website}>{user.website}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  userWrapper: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  singleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  singleInfo: {
    fontSize: 12,
  },
});
