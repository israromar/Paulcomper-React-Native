import React from "react";
import { StatusBar, ScrollView, SafeAreaView, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { store } from "./src/store";
import AppNavigator from "./src/navigation";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <ScrollView contentContainerStyle={backgroundStyle} contentInsetAdjustmentBehavior="automatic">
          <AppNavigator />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
