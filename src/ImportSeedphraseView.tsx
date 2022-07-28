import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {FINISH_WELCOME, GENERATE_SEEDPHRASE} from './const';
import {WelcomeStackShowSeedPhraseProps} from './types/navigation';
import {ReduxState} from './types/redux';

const ImportSeedphraseView = ({
  navigation,
}: WelcomeStackShowSeedPhraseProps) => {
  const dispatch = useDispatch();
  const [seedphrase, setSeedphrase] = useState(
    useSelector((state: ReduxState) => state.seedphrase.mnemonic),
  );

  const onChangeSeedphrase = (text: string) => {
    setSeedphrase(text);
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="12-word mnemonics"
        style={styles.input}
        onChangeText={onChangeSeedphrase}
        value={seedphrase}
      />
      <Button
        title="Confirm"
        onPress={() => {
          // According to https://stackoverflow.com/questions/68063572/how-to-clear-navigation-history-in-react-native
          // `replace` disables going back to the previous screen
          dispatch({
            type: GENERATE_SEEDPHRASE,
            payload: seedphrase,
          });
          dispatch({
            type: FINISH_WELCOME,
          });
          navigation.replace('HomeView');
        }}
      />
    </SafeAreaView>
  );
};

export default ImportSeedphraseView;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
