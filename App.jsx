import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabScreen from '../RN_New_Project/src/Tab-navigation/Tab-navigation';
import AssignmentScreen from './src/Shopping-screens/Screen';


const Tab = createBottomTabNavigator();
const App = () => {
  return (
  
    <NavigationContainer>
      
        {/* // <AssignmentScreen /> */}
    <BottomTabScreen />
    </NavigationContainer>

  );
};

export default App;
