import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type WelcomeStackParamList = {
  WelcomeView: undefined;
  ShowSeedPhraseView: undefined;
  ImportSeedphraseView: undefined;
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

// export type
export type AccountStackParamList = {
  AccountView: undefined;
  SendView1: undefined;
  SendView2: {receiver: string};
};

export type AccountStackSendView1Props = NativeStackScreenProps<
  AccountStackParamList,
  'SendView1'
>;

export type AccountStackSendView2Props = NativeStackScreenProps<
  AccountStackParamList,
  'SendView2'
>;
