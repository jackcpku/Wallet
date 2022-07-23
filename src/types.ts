import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type WelcomeStackParamList = {
  WelcomeView: undefined;
  ShowSeedPhraseView: undefined;
  HomeView: undefined;
  // Feed: {sort: 'latest' | 'top'} | undefined;
};

export type WelcomeStackShowSeedPhraseProps = NativeStackScreenProps<
  WelcomeStackParamList,
  'ShowSeedPhraseView'
>;

export type WelcomeStackHomeProps = NativeStackScreenProps<
  WelcomeStackParamList,
  'HomeView'
>;
