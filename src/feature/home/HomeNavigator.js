import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreeen from "./screens/WelcomeScreeen";

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  headerBackTitleVisible: false,
};

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
      <Stack.Screen name="Welcoome" component={WelcomeScreeen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
