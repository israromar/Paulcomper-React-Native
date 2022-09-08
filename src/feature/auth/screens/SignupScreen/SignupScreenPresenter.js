import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import eye from "../../../../../assets/eye.png";
import eyeOff from "../../../../../assets/eye-off.png";
import logo from "../../../../../assets/paulcamper.png";
import BigButton from "../../../../shared/buttons/BigButton";
import { color, spacing, typography } from "../../../../theme";
import ErrorMessage from "../../../../shared/form/ErrorMessage";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: color.background },
  innerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  logoContainer: {
    height: 100,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing.SCALE_10,
    marginBottom: spacing.SCALE_26,
    backgroundColor: color.dimGreen,
  },
  input: {
    width: "90%",
    borderWidth: 2,
    height: spacing.SCALE_32,
    marginTop: spacing.SCALE_20,
    borderRadius: spacing.SCALE_4,
    fontSize: typography.FONT_SIZE_20,
    paddingHorizontal: spacing.SCALE_10,
  },
  eyeIcon: {
    right: 0,
    position: "absolute",
    width: spacing.SCALE_20,
    height: spacing.SCALE_20,
    marginRight: spacing.SCALE_10,
  },
  button: {
    width: "90%",
    justifyContent: "center",
    marginTop: spacing.SCALE_50,
  },
  registerButtonText: { color: color.text, fontSize: typography.FONT_SIZE_20 },
});

const regex = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
};

const SignupScreeenPresenter = ({ onRegister }) => {
  const { auth } = useSelector((store) => store);
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    onRegister(data);
    handleFocus("");
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} resizeMethod="resize" resizeMode="contain" />
        </View>
        {/* Name */}
        <Controller
          control={control}
          rules={{
            required: `Name is required`,
            minLength: {
              value: 2,
              message: "Name should to be at-least 2 characters long",
            },
            maxLength: {
              value: 14,
              message: "Maximum of 14 characters are allowed",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ ...styles.input, borderColor: focusedField === "name" ? color.success : color.dark }}
              placeholder="Name"
              onFocus={() => {
                handleFocus("name");
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <ErrorMessage errors={errors} name="name" />}

        {/* Surname */}
        <Controller
          control={control}
          rules={{
            required: `Surname is required`,
            minLength: {
              value: 2,
              message: "Surname should be at-least 2 characters long",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ ...styles.input, borderColor: focusedField === "surname" ? color.success : color.dark }}
              placeholder="Surname"
              onFocus={() => {
                handleFocus("surname");
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="surname"
        />
        {errors.surname && <ErrorMessage errors={errors} name="surname" />}
        {/* Email */}
        <Controller
          control={control}
          rules={{
            required: `Email is required`,
            pattern: {
              value: regex.email,
              message: "Input does not match email format",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ ...styles.input, borderColor: focusedField === "email" ? color.success : color.dark }}
              placeholder="Email"
              onFocus={() => {
                handleFocus("email");
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              autoCompleteType="username"
              textContentType="username"
              keyboardType="email-address"
              returnKeyType="next"
            />
          )}
          name="email"
        />
        {errors.email && <ErrorMessage errors={errors} name="email" />}

        {/* Password */}
        <Controller
          control={control}
          rules={{
            required: `Password is required`,
            minLength: {
              value: 8,
              message: "Password should be at-least 8 characters long",
            },
            pattern: {
              value: regex.password,
              message: "Use at least one number and one uppercase letters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{ ...styles.input, borderColor: focusedField === "password" ? color.success : color.dark }}
                placeholder="Password"
                onFocus={() => {
                  handleFocus("password");
                }}
                secureTextEntry={!showPassword}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCompleteType="password"
                textContentType="password"
              />
              <TouchableOpacity activeOpacity={0.5} onPress={() => setShowPassword(!showPassword)}>
                <Image source={showPassword ? eyeOff : eye} resizeMethod="resize" resizeMode="contain" style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
          )}
          name="password"
        />
        {errors.password && <ErrorMessage errors={errors} name="password" />}

        {/* Submit button */}
        <View style={styles.button}>
          <BigButton onPress={handleSubmit(onSubmit)} color={color.button} disabled={auth?.loading} isLoading={auth?.loading} loadingColor="white">
            <Text style={styles.registerButtonText}>Register</Text>
          </BigButton>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupScreeenPresenter;
