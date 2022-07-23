/**
 * Sample code copied from https://reactnavigation.org/docs/tab-based-navigation#minimal-example-of-tab-based-navigation
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowSeedPhraseView from './ShowSeedPhraseView';
import WelcomeView from './WelcomeView';
import HomeView from './HomeView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen
          name="ShowSeedPhraseView"
          component={ShowSeedPhraseView}
        />
        <Stack.Screen name="HomeView" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
