export interface ReduxState {
  seedphrase: {
    generated: boolean;
    mnemonic: string;
  };
}

export interface Action {
  type: string;
  payload: string;
}
