import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { spacing, typography } from "../../../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    backgroundColor: "#d5edda",
    height: spacing.SCALE_106,
    padding: spacing.SCALE_18,
    borderRadius: spacing.SCALE_10,
  },
  text: {
    fontSize: typography.FONT_SIZE_24,
  },
});

const WelcomeScreeenPresenter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>User registered successfully</Text>
      </View>
    </View>
  );
};

export default WelcomeScreeenPresenter;
