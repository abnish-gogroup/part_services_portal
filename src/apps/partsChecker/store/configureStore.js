import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import partsCheckerReducer from '../reducer/partsCheckerPanel/partsCheckerReducer';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    partsCheckerReducer,
    applyMiddleware(thunkMiddleware),
    initialState
  );
  return store;
}
