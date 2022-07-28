import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowSeedPhraseView from './ShowSeedPhraseView';
import WelcomeView from './WelcomeView';
import HomeView from './HomeView';
import ImportSeedphraseView from './ImportSeedphraseView';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeView} />
      <Stack.Screen name="ShowSeedPhraseView" component={ShowSeedPhraseView} />
      <Stack.Screen
        name="ImportSeedphraseView"
        component={ImportSeedphraseView}
      />
      <Stack.Screen name="HomeView" component={HomeView} />
    </Stack.Navigator>
  );
};
