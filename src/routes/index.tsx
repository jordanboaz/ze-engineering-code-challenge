import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Presentation, Home, Details } from '../views';
const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Presentation">
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
