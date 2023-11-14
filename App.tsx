import { NativeRouter, Route, Routes } from "react-router-native";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import SessionPage from "./pages/Session";
import Navbar from "./pages/Navbar";
import * as React from "react";
import { ThemeProvider } from "react-native-magnus";

export default function App() {
  return (
    <ThemeProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/" Component={Navbar}>
            <Route path="dashboard" Component={DashboardPage} />
            <Route path="session" Component={SessionPage} />
          </Route>
        </Routes>
      </NativeRouter>
    </ThemeProvider>
  );
}
