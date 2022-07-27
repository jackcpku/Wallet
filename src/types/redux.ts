export interface ReduxState {
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
