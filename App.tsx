import { StyleSheet, Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Home />
    </NavigationContainer>
  );
}
