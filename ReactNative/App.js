import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from './screens/MainMenuScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import Calculator from './Lab1/calculator';
import { CardAnimationContext } from '@react-navigation/stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <Calculator />
  );
}
