import {FINISH_WELCOME} from './../const';
import {Action} from '../types/redux';

const initialState = {
  welcomeDone: false,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case FINISH_WELCOME: {
      return {
        ...state,
        welcomeDone: true,
      };
    }
    default:
      return state;
  }
};
