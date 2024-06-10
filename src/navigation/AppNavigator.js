import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash/SplashScreen';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Dashboard from '../screens/content/Dashboard';
import Product from '../screens/content/Product';
import Supplier from '../screens/content/Supplier';
import Distributor from '../screens/content/Distributor';
import Reports from '../screens/content/Reports';
import LoginSignup from '../screens/auth/LoginSignup';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Supplier" component={Supplier} />
      <Stack.Screen name="Distributor" component={Distributor} />
      <Stack.Screen name="Reports" component={Reports} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
