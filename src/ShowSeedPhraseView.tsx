import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WelcomeStackShowSeedPhraseProps} from './types';
import generate_seedphrase from './utils/generate_seedphrase';

const ShowSeedPhraseView = ({navigation}: WelcomeStackShowSeedPhraseProps) => {
  const seedPhrase = generate_seedphrase().phrase;

  return (
    <SafeAreaView>
      <Text>{seedPhrase}</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('WelcomeView');
        }}
      />
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate('HomeView');
        }}
      />
    </SafeAreaView>
  );
};

export default ShowSeedPhraseView;
