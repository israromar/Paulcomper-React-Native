import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { get, useFormContext } from "react-hook-form";

import { color } from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  errorText: {
    fontSize: 12,
    marginTop: 2,
    width: "auto",
    textAlign: "left",
    color: color.error,
    paddingHorizontal: 4,
  },
});

const ErrorMessage = ({ errors, name, message, width }) => {
  const methods = useFormContext();
  const error = get(errors || methods.errors, name);

  if (!error) {
    return <Text />;
  }

  const { message: messageFromRegister } = error;

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.errorText, textAlign: "left" }}>{messageFromRegister || message}</Text>
    </View>
  );
};

export default ErrorMessage;
