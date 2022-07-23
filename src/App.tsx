/**
 * Sample code copied from https://reactnavigation.org/docs/tab-based-navigation#minimal-example-of-tab-based-navigation
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowSeedPhraseView from './ShowSeedPhraseView';
import WelcomeView from './WelcomeView';
import HomeView from './HomeView';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Text} from 'react-native';
import {ReduxState} from './types/redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const seedphraseGenerated = useSelector(
    (state: ReduxState) => state.seedphrase.generated,
  );

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName={seedphraseGenerated ? 'HomeView' : 'Welcome'}
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
};

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
