import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  Text,
} from "react-native";
import contact from "../assets/Get-in-touch-bro.png";
import colors from "../constants/colors";

export default function Contact({ navigation, route }) {
  const [name, onChangeName] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [message, onChangeMessage] = useState(null);

  const handleMessage = () => {
    if (name && number && message) {
      Alert.alert(`Thanks, ${name}`, "Your message has been sent");
      onChangeMessage(null);
      onChangeName(null);
      onChangeNumber(null);
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Please fill all the fields");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.outer}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={styles.emptyWrapper}>
                <Image style={styles.emptyImage} source={contact} />
              </View>
              <TextInput
                style={styles.input}
                maxLength={20}
                onChangeText={onChangeName}
                value={name}
                placeholder="Please enter your Name"
              />
              <TextInput
                style={styles.input}
                maxLength={20}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Please enter your Phone Number"
                keyboardType="numeric"
              />
              <TextInput
                style={{ ...styles.input, ...{ height: 80 } }}
                maxLength={20}
                multiline={true}
                onChangeText={onChangeMessage}
                value={message}
                placeholder="Please enter your Message"
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  handleMessage();
                }}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Send</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  outer: {},
  emptyImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
