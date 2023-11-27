import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.tab.routes";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components/native";
import { useDarkModeSelector } from "../store/reducers/darkModeReducer";
import { StatusBar } from "expo-status-bar";

export function Routes() {
  const isDarkMode = useDarkModeSelector();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} translucent />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
