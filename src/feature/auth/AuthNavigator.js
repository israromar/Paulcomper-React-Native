import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "./screens/SignupScreen";

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  headerBackTitleVisible: false,
};

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Register" screenOptions={screenOptions}>
      <Stack.Screen name="Register" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
