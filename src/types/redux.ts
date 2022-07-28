export interface ReduxState {
  appState: {
    welcomeDone: boolean;
  };
  seedphrase: {
    generated: boolean;
    mnemonic: string;
    privateKey: string;
    address: string;
  };
}

export interface Action {
  type: string;
  payload: string;
}
