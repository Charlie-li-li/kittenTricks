import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutsHomeScreen } from '../scenes/layouts/layouts.home';

const Stack = createStackNavigator();

export const HomeBarsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={LayoutsHomeScreen}/>
  </Stack.Navigator>
);
