import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Text} from 'react-native';
import WelcomeFlow from './WelcomeFlow';
import {ReduxState} from './types/redux';
import HomeView from './HomeView';

const App = () => {
  const welcomeDone = useSelector(
    (state: ReduxState) => state.appState.welcomeDone,
  );
  return (
    <NavigationContainer independent={true}>
      {welcomeDone ? <HomeView /> : <WelcomeFlow />}
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
