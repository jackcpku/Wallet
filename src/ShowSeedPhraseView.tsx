import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {FINISH_WELCOME, GENERATE_SEEDPHRASE} from './const';
import {WelcomeStackShowSeedPhraseProps} from './types/navigation';
import {ReduxState} from './types/redux';
import generate_seedphrase from './utils/generate_seedphrase';

const ShowSeedPhraseView = ({navigation}: WelcomeStackShowSeedPhraseProps) => {
  const dispatch = useDispatch();
  const [seedphrase, setSeedphrase] = useState(
    useSelector((state: ReduxState) => state.seedphrase.mnemonic),
  );

  useEffect(() => {
    const seedphraseTmp = generate_seedphrase();

    setSeedphrase(seedphraseTmp);

    dispatch({
      type: GENERATE_SEEDPHRASE,
      payload: seedphraseTmp,
    });
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Text>{seedphrase}</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate('WelcomeView');
        }}
      />
      <Button
        title="Continue"
        onPress={() => {
          // According to https://stackoverflow.com/questions/68063572/how-to-clear-navigation-history-in-react-native
          // `replace` disables going back to the previous screen
          dispatch({
            type: FINISH_WELCOME,
          });
          navigation.replace('HomeView');
        }}
      />
    </SafeAreaView>
  );
};

export default ShowSeedPhraseView;
