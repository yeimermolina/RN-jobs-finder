import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
  )
);

//TODO PAY ATTENTION TO REDUX PERSIST MIGRATE
//TODO INTEGRATE REDUX PERSIST

// persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;

