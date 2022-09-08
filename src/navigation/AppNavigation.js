import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeNavigator from "../feature/home/HomeNavigator";

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  headerTransparent: true,
  headerBackTitleVisible: false,
};

const Stack = createNativeStackNavigator();

export default function AppNavigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Welcome"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
