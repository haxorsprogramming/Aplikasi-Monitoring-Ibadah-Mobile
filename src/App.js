import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {SplashScreen, MainApp} from "./pages";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./Router";

const App = () => {
  return (
   <NavigationContainer>
     <Router />
   </NavigationContainer>
  )
}

export default App;