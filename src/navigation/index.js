import React, { useRef } from "react";
import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigator() {
  const {
    auth: { user, isLoggedIn },
  } = useSelector((store) => store);

  const isDarkMode = useColorScheme() === "dark";

  // References
  const navigationRef = useRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={isDarkMode ? DarkTheme : DefaultTheme}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute().name;
      }}
      onStateChange={() => {}}
    >
      {user && isLoggedIn ? <AppNavigation navigation={navigationRef} /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
