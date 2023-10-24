import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/main" Component={LoginPage} />
        </Routes>
      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
