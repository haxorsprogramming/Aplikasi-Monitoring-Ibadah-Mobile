import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen, MainApp} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default Router;
