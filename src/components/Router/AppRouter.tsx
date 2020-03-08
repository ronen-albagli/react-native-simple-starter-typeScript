import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { StyleSheet } from "react-native";
const Stack = createStackNavigator();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center"
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#484646"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              alignSelf: "center",
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e3b3b",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }
});

export default AppRouter;
