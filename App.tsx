import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Library from './src/screens/Library';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Library" component={Library} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
