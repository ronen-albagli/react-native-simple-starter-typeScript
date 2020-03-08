import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/components/screens/HomeScreen/HomeScreen";
import AppRouter from "./src/components/Router/AppRouter";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    // </View>
    // <View style={styles.container}>
    //   <AppRouter />
    // </View>
    // <NavigationContainer>
    //   <HomeScreen />
    // </NavigationContainer>
    // <View style={styles.container}>
    <AppRouter />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e3b3b",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }
});
