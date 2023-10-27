import { NativeRouter, Route, Routes } from "react-router-native";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import * as React from "react";
import { ThemeProvider } from "react-native-magnus";

export default function App() {
  return (
    <ThemeProvider>
      <NativeRouter>
        <Routes>
          <Route path="/dashboard" Component={LoginPage} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </NativeRouter>
    </ThemeProvider>
  );
}
