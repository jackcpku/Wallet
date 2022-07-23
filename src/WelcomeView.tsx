import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WelcomeStackHomeProps} from './types';

function WelcomeView({navigation}: WelcomeStackHomeProps) {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome!</Text>
      <Button
        title="Generate SeedPhrase"
        onPress={() => {
          navigation.navigate('ShowSeedPhraseView');
        }}
      />
    </SafeAreaView>
  );
}

export default WelcomeView;
