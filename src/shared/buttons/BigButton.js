import React from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

import { color as colors, spacing } from "../../theme";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: spacing.SCALE_50,
    backgroundColor: colors.button,
  },
});

const BigButton = ({ onPress = () => {}, color, children, borderColor = colors.transparent, borderRadius = 4, borderWidth = 1, disabled = false, isLoading = false, loadingColor }) => (
  <TouchableOpacity
    onPress={() => {
      if (!disabled) onPress();
    }}
    disabled={disabled}
    style={{ ...styles.button, backgroundColor: disabled ? "lightgrey" : color, borderColor, borderWidth, borderRadius }}
  >
    {isLoading ? <ActivityIndicator color={loadingColor} /> : children}
  </TouchableOpacity>
);

export default BigButton;
