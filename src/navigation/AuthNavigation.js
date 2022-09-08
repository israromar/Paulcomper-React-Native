import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "../feature/auth/AuthNavigator";

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  headerTransparent: true,
  headerBackTitleVisible: false,
};

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={screenOptions}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
}
