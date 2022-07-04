import React from "react";
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import CarDetails from "./screens/CarDetails";
import News from "./screens/News";
import Contact from "./screens/Contact";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import colors from "./constants/colors";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
    const Stack = createNativeStackNavigator();
    const Tab = createMaterialBottomTabNavigator();
    const defaultStyling = {
        headerStyle: {
            backgroundColor:colors.primary ,
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold",
        },
    };
    const styles = StyleSheet.create(defaultStyling);
    const MyTheme = {
        dark: false,
        colors: {
            primary: colors.primary,
            background: colors.primary,

        },
    };
    const HomeNavigator = () => {

        return (
            <Stack.Navigator initialRouteName="Cars" style={styles.headerStyle}>
                <Stack.Screen
                    name="Cars"
                    component={Home}
                    options={{...defaultStyling, ...{title: "Cars"}}}
                />
                <Stack.Screen
                    name="CarDetails"
                    component={CarDetails}
                    options={{...defaultStyling, ...{title: "Car Details"}}}
                />
            </Stack.Navigator>
        );
    };

    const NewsNavigator = () => {
        return (
            <Stack.Navigator initialRouteName="NewsScreen">
                <Stack.Screen
                    name="NewsScreen"
                    component={News}
                    options={{...defaultStyling, ...{title: "News"}}}
                />
            </Stack.Navigator>
        );
    };



    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator initialRouteName="Home"   >
                <Tab.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({color}) => (
                            <Ionicons name="home" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen name="News" component={NewsNavigator}
                            options={{
                                tabBarLabel: "News",
                                tabBarIcon: ({color}) => (
                                    <Ionicons name="bookmarks" color={color} size={26}/>
                                ),
                            }}/>
                <Tab.Screen name="Contact" component={Contact}
                            options={{
                                tabBarLabel: "Contact",
                                tabBarIcon: ({color}) => (
                                    <Ionicons name="call" color={color} size={26}/>
                                ),
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

