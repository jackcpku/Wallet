import {combineReducers} from 'redux';
import appStateSlice from './slices/appStateSlice';
import seedphraseSlice from './slices/seedphraseSlice';

const rootReducer = combineReducers({
  seedphrase: seedphraseSlice,
  appState: appStateSlice,
});

export default rootReducer;
